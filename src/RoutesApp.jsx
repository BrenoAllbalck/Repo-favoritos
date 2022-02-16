import { Routes, Route, BrowserRouter } from "react-router-dom"
import NotFound from "./Pages/Error";
import Main from './Pages/Main';
import Repositorio from './Pages/Repositorio'

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/Repositorio/:repositorio" element={<Repositorio/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}