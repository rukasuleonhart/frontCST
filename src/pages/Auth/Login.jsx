import EmailIcon from '../../assets/mail.svg'
import Lock from '../../assets/lock.svg'
import "../Auth/Auth.css"

const Login = () => {
    return (
        <div className='container-main'>
            <div className="container">
                <h1>Acessar Sistema</h1>
                <div className='input-wrapper'>
                    <img className='icon' src={EmailIcon}/>
                    <input type='text' placeholder="CPF ou E-Mail" />
                </div>
                <div className='input-wrapper'>
                    <img className='icon' src={Lock} />
                    <input type='password' placeholder="Senha" />  
                </div>
                <button className="primary-button">Entrar</button>
                <a href="#">Esqueci minha senha</a>
                <p>__________________________________________</p>
                <p>Ainda não tem cadastro ?</p> <a href="#">Cadastre-se</a>
            </div>
        </div>
    )
};

export default Login;