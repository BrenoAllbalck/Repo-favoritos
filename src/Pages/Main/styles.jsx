import styled, {keyframes, css} from 'styled-components';

export const Container = styled.div`
max-width:700px;
background:#fff;
border-radius:4px;
box-shadow:0 0 20px rgba(0,0,0,0.2);
padding:30px;
margin:80px auto;


h1{
    Font-family:arial;
    font-size:20px;
    flex-direction:row;
    display:flex;
    align-items:center;

    svg{
        margin-right:10px;
    }
}
`;

export const Lista = styled.ul`
  list-style:none;
  margin-top: 20px;
  flex-direction: column;
  li{
    Font-family:arial;
    padding: 15px 0;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    margin-left:-44px;

    & + li{
      border-top: 1px solid #999999;
    }

    a{
      color:#0D2636;
      text-decoration: none;
    }


  }
`

export const DeleteButton = styled.button.attrs({
  type:'button'
})`
  background: transparent;
  color:#0D2636;
  border:0;
  padding: 8px 7px;
  outline:0;
  border-radius: 4px;
`;


export const Formulario = styled.form`
    margin-top:20px;
    display:flex;
    flex-direction:row;

    input{
        width:100%;
        font-size:17px;
        border:1px solid ${props=> props.verify ? "#ff0000" : "#999999"};
        border-radius:4px;
        flex:1;
}
`;




//Criando animcação do botao
const animate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background:#0D2636;
  border: 0;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  


  &[disabled]{
    cursor: not-allowed;
    opacity: 0.5;
  }


  ${props => props.loading &&
    css`
      svg{
        animation: ${animate} 2s linear infinite;
      }
    `
  };
`;


