import Final from "./Final.js";
import React, {useState} from 'react';

const Quiz = ( props ) => {

    const alteraTela = props.alteraTela;
    const [ etapa, alteraEtapa ] = React.useState( 0 );

    const [ pontos, alteraPontos ] = React.useState( 0 );

    const numbers = [1, 2, 3, 4, 5];

    const doubled = numbers.map((number) => number * 2);

    const perguntas = [ 
        

        {
            
            pergunta: "Onde você passaria suas férias?",
            respostas: ["Praia", "Ilha", "Biblioteca", "Estudio de Dança", "Shopping"],
            imagem: "https://i.imgur.com/zTRteaF.jpeg",
            correta: 0
        },
        {
            pergunta: "Se você tivesse um super poder, qual seria?",
            respostas: ["Voar", "Invisibilidade", "Força", "Respirar em baixo d'água", "Falar com os animais"],
            imagem: "https://i.imgur.com/tqSFCt6.jpg",
            correta: 0
        },
        {
            pergunta: "Qual sua comida favorita?",
            respostas: ["Lasanha", "Strogonoff", "Batata frita", "Macarronada", "Salada"],
            imagem: "https://i.imgur.com/8Q0h8ar.jpg",
            correta: 0
        },
        {
            pergunta: "Qual a sua bebida favorita?",
            respostas: ["Café", "Refrigerante", "Suco", "Milk shake", "Água"],
            imagem: "https://i.imgur.com/PVpthAI.jpg",
            correta: 0
        },
        {
            pergunta: "Em uma festa á fantasia, você iria fantasiado do quê?",
            respostas: ["Fada", "Colegial", "Princesa", "Sereia", "Gato"],
            imagem: "https://i.imgur.com/lh0qqyX.jpg",
            correta: 0
        }
    ];


    const verificaResposta = ( i ) => {

        const resposta_digitada = perguntas[ etapa ].correta;

        
        alteraPontos( pontos + (i * 10) )
        

        if ( etapa + 1 < perguntas.length ){
            alteraEtapa(etapa + 1);

        }else{
            alteraTela (<Final alteraTela={alteraTela} pontos={pontos} />);
        }

    }

    return ( 

        <div className="perguntas">

            <p>pontos: {pontos}</p>
            
            <h2> { perguntas[ etapa ].pergunta } </h2>
            <img width={100} src={perguntas[ etapa ].imagem } />

            <ul>

                {

                    perguntas[ etapa ].respostas.map( (r,i) => {
                        return <li onClick={ ()=> verificaResposta( i ) } > { r } </li>
                    } )

                }

            </ul>

        </div>

    );

}
export default Quiz;