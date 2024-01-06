import "./css/custom/Login.css"
import "./css/custom/App.css"

function Login() {
    return (
        <div className="login-container container-xl vh-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="login-block col-6">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <h2>Вход</h2>
                            <p>Введите Email</p>
                            <input type="email" placeholder="Email"/>
                            <p>Введите пароль</p>
                            <input type="password" placeholder="Пароль"/>
                            <a href="#" className="submit">Войти</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login