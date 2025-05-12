import "./Home.css";
import icon from "../../assets/icon.png"

const Home = () => {
    return (
    <div>
        <div className="title-container">
            <img src={icon} alt="Ícone" width={128} height={128} />
            <h1>Fisioterapia CST Estética & Cosmética</h1>
        </div>
        <div className="menu-opcoes">
            <button className="opcoes">Agendar Consulta</button>
            <button className="opcoes">Consultar Agenda</button>
            <button className="opcoes">Prontuário</button>
            <button className="opcoes">Relatórios</button> 
        </div>
        <div className="menu-opcoes" id="auth">
            <button className="opcoes">Conectar-se</button>
            <button className="opcoes">Registrar-se</button>
        </div>
    </div>
    )
};

export default Home;