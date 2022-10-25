import React from "react";
import "./Css/Info.css"
// import image from "./resources/👍.jpg"

function Info(){
    return(
        <div className="info">
            <div className="first-sec">
                {/* <img src={image} /> */}
                <div className="text">
                    <h4>
                        O que é o uMirror?
                    </h4>
                    <h5>
                        O "uMirror" é um espelho inteligente que utiliza algorítimos de reconhecimento facial para determinar as emoções do usuário.
                        Com nosso produto visamos ajudar pessoas com sindromes que afetam o sistema emocional, tais como BPD, depresão, borderline e diversas outras
                        As emoções capturadas são enviadas para um servidor, assim o usuário pode compartilhar as informações com um profissional da saúde para tratamento mais efetivo
                    </h5>
                </div>
            </div>

            <div className="first-sec">
                <div className="text">
                    <h4> Como criamos o uMirror</h4>
                    <h5>
                        O "uMirror" nasceu em 2022 na instituição TecPuc, com nossa equipe criamos um protótipo funcional, qual foi apresentado em uma banca para professores e convidados
                        Com nossos recusros limitados criamos apenas um protótipo, porém estamos trabalhando em uma segunda versão, com peças melhores e software melhorado.
                        Nosso projeto está em constante evolução, para que possamos entregar sempre o melhor para nossos usuários
                    </h5>
                    
                </div>
                {/* <img src={image} /> */}
            </div>
        </div>
    )
}

export default Info