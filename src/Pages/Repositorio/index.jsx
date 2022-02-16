import React, {useState, useEffect} from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import api from '../../services/Api'
import { Loading, Container, Owner, BtnBack, Ussies, BtnArea, BtnChangeVisibility, BtnOpen, BtnClosed, BtnAll } from './styles';


export default function Repositorio(){
    const { repositorio } = useParams()
    const [listRepo, setListRepo] = useState({});
    const [listIssues, setListIssue] = useState([]);
    const [loading, setLoadidng] = useState(true);
    const [pages, setPages] = useState(1);
    const [visibility, setVisibility] = useState('open');

    function handlePage(i){
      setPages(i === 'next' ? pages + 1 : pages - 1);
    };

    function handleVisibility(i){
      setVisibility(i);
    }

    useEffect(()=>{
      async function loadIssues(){
        const nameUrl = repositorio;

        const response = await api.get(`/repos/${nameUrl}/issues`, {
          params:{
            state:visibility,
            page:pages,
            per_page:5,
          }
        })

        setListIssue(response.data)
      }

      loadIssues()
    },[pages, visibility])

    useEffect(()=>{

      async function loadData(){
          const repoName = repositorio

            const [repositorioData, issuesData] = await Promise.all([
              api.get(`repos/${repoName}`),
              api.get(`repos/${repoName}/issues`,{
                params:{
                  state:visibility,
                  per_page:5
                }
              })
            ])

            setListRepo(repositorioData.data);
            setListIssue(issuesData.data)
            setLoadidng(false)
        }
      loadData()
    },[repositorio, visibility])

    if(loading){
      return(
        <Loading>
          <h1>Carregando...</h1>
        </Loading>
      )
    }
  return(
    <Container>
      <BtnBack to={"/"}>
        <FaArrowLeft color='#000' size={30}/>
      </BtnBack>
      <Owner>
        <img
        src={listRepo.owner.avatar_url}
        />
        <h1>
          {listRepo.name}
        </h1>
        <span>
          {listRepo.description}
        </span>
      </Owner>

      <BtnChangeVisibility>
        <BtnOpen
        onClick={()=>handleVisibility('open')}
        tipo={visibility}
        >
          open
        </BtnOpen>

        <BtnClosed
        onClick={()=>handleVisibility('closed')}
        tipo={visibility}
        >
          Closed
        </BtnClosed>

        <BtnAll
        onClick={()=>handleVisibility('all')}
        tipo={visibility}
        >
          All
        </BtnAll>
      </BtnChangeVisibility>

      


      <Ussies>
        {
          listIssues.map( uses =>(
              <li key={String(uses.id)}>
                <img src={uses.user.avatar_url}/>

                <div>
                  <strong>
                    <a href={uses.html_url}>
                      {uses.title}
                    </a>

                    {uses.labels.map(label=>(
                      <span key={label.id}>{label.name}</span>
                    ))}
                  </strong>
                    <p>{uses.user.login}</p>
                </div>
              </li>
          ))
        }
      </Ussies>
      <BtnArea>
        <button
        disabled={pages < 2}
        type='button'
        onClick={()=>handlePage('back')}
        >
          Back
        </button>

        <button
        type='button'
        onClick={()=>handlePage('next')}
        >
          Next
        </button>
      </BtnArea>
    </Container>
  )
}