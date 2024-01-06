import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Chat from "./Chat";
import Requests from "./Requests";
import Login from "./Login";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/requests' element={<Requests/>}/>
            <Route path='/chat' element={<Chat/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
)

export default Router