import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:100vh;
h1{
    color:#fff
}
`;

export const Container = styled.div`
max-width:700px;
background:#fff;
border-radius:4px;
box-shadow:0 0 20px rgba(0,0,0,0.2);
padding:30px;
margin:80px auto;
`;

export const Owner = styled.div`
align-items:center;
display:flex;
flex-direction:column;

    img{
        border-radius:20%;
        width:200px;
        margin:20px 0
    }

    h1{
        font-size:30px;
        color:#0d2636;
        Font-family:arial
    }

    p{
        Font-family:arial;
        font-size:15px;
        margin-top:20px;
        text-align:center;
        max-width:400px;
        line-height: 1.4px;
    }  
    
    span{
        font-size: 15px;
        font-family: Arial;
        margin-top: 10px;
    }
`;

export const BtnBack = styled(Link)`
border:0;
outLine:0;
background:transparent;
`;

export const Ussies = styled.ul`
    list-style:none;
    margin-top:20px;
    padding-top:20px;
    border-top:1px solid #999999;
    flex-direction: column;
    li{
        display:flex;
        padding:15px 10px;
        margin-top:30px;
    
        & + li{
            margin-top:10px;
        }
    
    img{
        width:36px;
        height:36px;
        border-radius:50%;
        border:2px solid #0d2636
    }
    div{
        flex:1;
        margin-left:10px;

        p{
            margin-top:10px;
            color:#000;
            font-family:arial;
        }
    

    strong{
        font-size:15px;
        Font-family:arial;
    

    a{
        text-decoration:none;
        color:#222;
        transition:0.3s;
        Font-family:arial;
        

        &:hover{
            color:#0071db
        }
    }

    span{
        background: #000;
        color:#ddd;
        margin-left:5px;
        border-radius:4px;
        font-size:13px;
        font-weight:bold;
        padding:5px 7px;
        Font-family:arial;
    }
    }
}}

`;

export const BtnArea = styled.div`
display:flex;
align-items:center;
justify-content:space-between;

    button{
        background:#222;
        color:#fff;
        border-radius:4px;
        padding:5px 10px;
        border:0;

        &:disabled{
            cursor:not-allowed;
            opacity:0.5
        }
    }
`;

export const BtnChangeVisibility = styled.div`
align-items:center;
justify-content:space-around;
margin-top:15px;
display:flex;
`;

export const BtnOpen = styled.button`
background: ${props => props.tipo === 'open' ? '#dddd' : '#0d2636'};
color:${props => props.tipo === 'open' ? '#0d2636' : '#ddd'};
padding:5px 10px;
font-size:20px;
border:0;
`;

export const BtnClosed = styled.button`
background: ${props => props.tipo === 'closed' ? '#dddd' : '#0d2636'};
color:${props => props.tipo === 'closed' ? '#0d2636' : '#ddd'};
padding:5px 10px;
font-size:20px;
border:0;
`;

export const BtnAll = styled.button`
background: ${props => props.tipo === 'all' ? '#dddd' : '#0d2636'};
color:${props => props.tipo === 'all' ? '#0d2636' : '#ddd'};
padding:5px 10px;
font-size:20px;
border:0;
`;

export const spanDescription = styled.span`
font-size: 20;
font-family: Arial;
color:#fff
`;