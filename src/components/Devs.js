import React from "react";
import "./Css/Devs.css";
import img from "./resources/👍.jpg"
import enzo from "./resources/enzo.jpeg"
import julio from "./resources/julio.jpeg"
import luiz from "./resources/luiz.jpg"
import lucas from "./resources/luas.jpeg"
import joao from "./resources/joao.jpeg"
import { FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"


function Devs() {
    return (
        <div className="main-body">
            <h1>Conheça nosso time!</h1>

            <div className="main-wrapper">
                <div className="card">
                    <div className="image">
                        <img src={enzo} />
                    </div>
                    <div className="info-card">
                        <h4>Enzo Enrico</h4>
                        <h5>Lead Developer</h5>
                    </div>
                    <div className="socials">
                        <a href="https://twitter.com/ky0uko__">
                            <FaTwitter />
                        </a>
                        <a href="https://github.com/enzoenrico">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/ky0uko_/">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={luiz} alt="#"/>
                    </div>
                    <div className="info-card">
                        <h4>Luiz Guilherme</h4>
                        <h5>Front-End Developer</h5>
                    </div>
                    <div className="socials">   
                        <a href="https://twitter.com/oLyghtz">
                            <FaTwitter />
                        </a>
                        <a href="https://github.com/yLight">
                            <FaGithub />
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={julio} />
                    </div>
                    <div className="info-card">
                        <h4>Júlio César</h4>
                        <h5>Analytical Developer</h5>
                    </div>
                    <div className="socials">
                        <a href="https://twitter.com/ky0uko__">
                            <FaTwitter />
                        </a>
                        <a href="https://github.com/enzoenrico">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/ky0uko_/">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={lucas} />
                    </div>
                    <div className="info-card">
                        <h4>Lucas Gabriel</h4>
                        <h5>Device Architeture</h5>
                    </div>
                    <div className="socials">
                        <a href="https://twitter.com/ky0uko__">
                            <FaTwitter />
                        </a>
                        <a href="https://github.com/enzoenrico">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/ky0uko_/">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={joao} />
                    </div>
                    <div className="info-card">
                        <h4>João Manuel</h4>
                        <h5>Product Designer</h5>
                    </div>
                    <div className="socials">
                        <a href="https://twitter.com/ky0uko__">
                            <FaTwitter />
                        </a>
                        <a href="https://github.com/enzoenrico">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/ky0uko_/">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Devs