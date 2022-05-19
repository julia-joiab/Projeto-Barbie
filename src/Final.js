import Apresentacao from "./Apresentacao.js";

const Final = ( props ) => {

    require("./Final.css")

    const alteraTela = props.alteraTela;

    return ( 

        <div className="final">

            <h1 className="h1"> Parabénsssss! </h1>
            <p> Você participaria do filme... </p>
            <img src="https://c.flikshost.com/70227049/backdrops/large/45r3Vhb30yumJFlGDAtxPMe8YND.jpg"></img>
            <p> Você terminou o Quiz! </p>
            <button className="botao" onClick={ ()=> props.alteraTela(<Apresentacao alteraTela={alteraTela} />)} > RECOMEÇAR </button>

        </div>

    );
}
 
export default Final;