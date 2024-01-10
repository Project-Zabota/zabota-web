import "./css/custom/Login.css"
import "./css/custom/App.css"
import {useRef} from "react";
import Network from "./service/Network";
import AuthService from "./service/AuthService";

function Login() {
    const emailInput = useRef(null);
    const passwordInput = useRef(null);

    const auth = () => {
        console.log("")
        Network.post("/auth/login", {
            "email": emailInput.current.value,
            "password": passwordInput.current.value
        }).then(
            r => {
                AuthService.authorize(r.data)
                window.location.href = '/requests';
            }
        ).catch( r => {
            console.log(r)
            alert("Неверный email или пароль")
        })
    }

    return (
        <div className="login-background">
            <div className="login-container container-xl vh-100">

                <div className="row h-100 justify-content-center align-items-center">
                    <div className="login-block col-6">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <h2>Вход</h2>
                                <input value="mail.com" ref={emailInput} type="email" placeholder="Email"/>
                                <input value="test" ref={passwordInput} type="password" placeholder="Пароль"/>
                                <a onClick={auth} className="submit">Войти</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login