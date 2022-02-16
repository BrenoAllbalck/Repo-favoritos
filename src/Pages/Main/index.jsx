import React, { useState, useCallback, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Container, Formulario, SubmitButton, Lista,DeleteButton } from "./styles";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'
import api from '../../services/Api'

export default function Main(){
    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);



    useEffect(()=>{
        const listStorage = localStorage.getItem('repos');

        if(listStorage){
            setRepositorios(JSON.parse(listStorage));
        }
            
    },[])

    useEffect(()=>{
        localStorage.setItem("repos", JSON.stringify(repositorios))
    },[repositorios])

    const handleDelet = useCallback((repo)=>{
            const find = repositorios.filter( r => r.name !== repo)

            setRepositorios(find)
        
       },[repositorios])

       useState(()=>{})

       function handleChange(e){
        setNewRepo(e.target.value);
        setAlert(false);
       }

    const handleSubmit = useCallback((e)=>{
        e.preventDefault();
        setAlert(false)

            async function submit(){
                if(newRepo === ''){
                    alert('digite alguma coisa')
                    return;
                }
                try{
                    
                    setLoading(true);
                    const response = await api.get(`repos/${newRepo}`)

                    const verify = repositorios.find(r => r.name === newRepo );

                    if(verify){
                        alert('respositorio dublicado!')
                    }
        
                    const data = {
                        name:response.data.full_name,
                    }
        
                    setRepositorios([...repositorios, data]);
                    console.log(repositorios)
                    setNewRepo('')
                }catch(error){
                    console.log(error)
                    setAlert(true)
                }finally{
                    setLoading(false)
                }
               
            }
            setLoading(false);
            submit();

    },[newRepo, repositorios])

    

    return(
        <Container>
            <h1>
             <FaGithub size={20}/>
             Procurar repositorios
            </h1>

            <Formulario onSubmit={handleSubmit} verify={alert}>
                <input 
                onChange={(e)=>handleChange(e)}
                value={newRepo}
                type='text' 
                placeholder="Buscar Repositorio"/>
                <SubmitButton>
                    {
                        loading ? (
                            <FaSpinner 
                            loading={loading ? 1 : 0}
                            color="#fff" 
                            size ={15}/>
                        ) : (
                            <FaPlus color="#fff" size={15}/>
                        )
                    }
                </SubmitButton>
            </Formulario>

            <Lista>
                {
                    repositorios.map( repo =>(
                        <li key={repo.name}>
                            <span>
                            <DeleteButton onClick={()=>handleDelet(repo.name)} >
                                <FaTrash/>    
                            </DeleteButton>
                            {repo.name}
                            </span>

                               <Link to={`/repositorio/${encodeURIComponent(repo.name)}`}>
                                    <FaBars/>
                                </Link>
                          
                        </li>
                    ) )
                }
            </Lista>
        </Container>
    )
}