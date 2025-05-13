import "./Home.css";
import icon from "../../assets/icon.png"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const GetPageLogin = () => {
        navigate("/login");
    };
    
    const GetPageRegister = () => {
        navigate("/register");
    };

    return (
    <div>
        <div className="title-container">
            <img src={icon} alt="Ícone" width={128} height={128} />
            <h1>Fisioterapia CST Estética & Cosmética</h1>
        </div>
        <div className="menu-opcoes">
            <button className="primary-button">Agendar Consulta</button>
            <button className="primary-button">Consultar Agenda</button>
            <button className="primary-button">Prontuário</button>
            <button className="primary-button">Relatórios</button> 
        </div>
        <div className="menu-opcoes" id="auth">
            <button className="primary-button" onClick={GetPageLogin}>Conectar-se</button>
            <button className="primary-button" onClick={GetPageRegister}>Registrar-se</button>
        </div>
    </div>
    )
};

export default Home;