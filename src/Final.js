import Apresentacao from "./Apresentacao.js";

const Final = ( props ) => {

    require("./Final.css")

    const alteraTela = props.alteraTela;

    const pontos = props.pontos;

    let barbie = "advogada";

    let imagem = ""

    if(pontos <= 30){
        barbie = "Barbie a Sereia das Pérolas"
        imagem = "https://lizaeventos.loja2.com.br/img/6f58a789092531f287db32ba016306cb.jpg"

    }else if(pontos <= 50){
        barbie = "Barbie e o Segredo das Fadas"
        imagem = "https://i.ytimg.com/vi/RuEIgiF_XEM/maxresdefault.jpg"
        

    }else if(pontos <= 100){
        barbie = "Barbie e as 12 Princesas Bailarinas"
        imagem = "https://clarovideocdn9.clarovideo.net/PELICULAS/BARBIEINTHE12DANCINGPRINCESSES/EXPORTACION_WEB/PT/BARBIEINTHE12DANCINGPRINCESSESWHORIZONTAL.jpg?size=675x380"

    }else if(pontos <= 150){
        barbie = "Barbie: A Princesa da Ilha"
        imagem = "https://i.ytimg.com/vi/IW03v1v4lFk/maxresdefault.jpg"

    }else if(pontos <= 200){
        barbie = "Barbie: Escola de Princesas"
        imagem = "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZhSXY7n0uj-ENr_eXAoB-hQ4oeAIZr4AQr0tUQdiBh6b7JZRv7Fba1ChyILAKd4LIhdwyfrBQtYN3OUZ_ayS0uNkskwL5LE5Am1.jpg?r=66b"
    }



    return ( 

        <div className="final">

            <h1 className="h1"> Parabénsssss! </h1>
            <p> Você participaria do filme... </p>
            <img src={imagem}/>
            <p> Você terminou o Quiz! </p>

            <button className="botao" onClick={ ()=> props.alteraTela(<Apresentacao alteraTela={alteraTela} />)} > RECOMEÇAR </button>                  

        </div>

    );
}
 
export default Final;