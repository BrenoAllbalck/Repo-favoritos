import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{margin:0px;
paddig:0px;
outline:0px;
box-sizing:0px;
};

html, body, #root{
    min-height:100%
};

body{
    background:#0d2636;
    font-size:14px;
    -webkit-font-smothing:anitialiased !important;
}

body,input,button{
    color:#222;
    font-size:14
}

button{
    cursos:pointer
}

`;