import HeaderImage from "../../assets/headerImage.svg";

const Main = ({ onClick }) => {
    return (
        <main>
            <div className="row">
                <div className="col-60">
                    <h1>Tem uma vaguinha aí?</h1>
                    <p className="subtitle">
                        Nosso servidor Pessoas de Tech tem mais de 1.000 desenvolvedores júniores querendo uma
                        oportunidade.
                    </p>
                    <p>
                        Tanto que alguns deles criaram esta plataforma para automatizar a inserção de vagas lá no
                        discord. Tem uma oportunidade? Preencha o formulário abaixo.
                    </p>
                    <button onClick={onClick}>Opa, vamos lá</button>
                </div>
                <div className="row-40">
                    <img src={HeaderImage} alt="Pessoas programadoras" />
                </div>
            </div>
        </main>
    );
};

export default Main;
