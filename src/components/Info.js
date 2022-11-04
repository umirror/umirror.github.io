import React from "react";
import "./Css/Info.css"
import image from "./resources/👍.jpg"
import { useRef } from "react";
import Como from "./subpages/como";
import Rumo from "./subpages/rumo";
import FAQ from "./subpages/FAQ";
import Devs from "./Devs";



function Info() {
    const infoRef = useRef()
    const backToInfo = () => {
        infoRef.current.scrollIntoView({ behavior: "smooth" })
    }
    const comoRef = useRef()
    const backToComo = () => {
        comoRef.current.scrollIntoView({ behavior: "smooth" })
    }
    const rumoRef = useRef()
    const backToRumo = () => {
        rumoRef.current.scrollIntoView({ behavior: "smooth" })
    }
    const faqRef = useRef()
    const backToFAQ = () => {
        faqRef.current.scrollIntoView({ behavior: "smooth" })
    }
    const devsRef = useRef()
    const backToDevs = () => {
        devsRef.current.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="info-wrapper">
            <div className="info" >

                <p className="box" onClick={backToComo}>
                    Como criamos o uMirror
                </p>
                <p className="box" onClick={backToRumo} >
                    Nosso rumo e visão de futuro
                </p>
                <p className="box" onClick={backToFAQ}>
                    FAQ
                </p>
                <p className="box" onClick={backToDevs}>
                    Conheça nosso time
                </p>
            </div>


            <div className="wrapper-pages">
                <div className="como" ref={comoRef}>
                    <Como />
                </div>
                <div className="como" ref={rumoRef}>
                    <Rumo />
                </div>
                <div className="como" ref={faqRef}>
                    <FAQ />
                </div>
                <div className="como" ref={devsRef}>
                    <Devs />
                </div>
            </div>

        </div>


    )
}

export default Info