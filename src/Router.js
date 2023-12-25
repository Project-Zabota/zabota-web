import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Chat from "./Chat";
import Requests from "./Requests";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Requests/>}/>
            <Route path='/request' element={<Chat/>}/>
        </Routes>
    </BrowserRouter>
)

export default Router