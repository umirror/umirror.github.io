import React from "react";
import "./Css/Devs.css";
import img from "./resources/👍.jpg"
import { FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"


function Devs() {
    return (
        <div className="main-body">
            <h1>Conheça nosso time!</h1>
            <div className="main-wrapper">
                <div class="card">
                    <div class="image">
                        <img src={img} />
                    </div>
                    <div class="info_card">
                        <h4>Enzo Enrico</h4>
                        <h5>Lead Developer</h5>
                    </div>
                    <div class="socials">
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
                <div class="card">
                    <div class="image">
                        <img src={img} />
                    </div>
                    <div class="info_card">
                        <h4>Enzo Enrico</h4>
                        <h5>Lead Developer</h5>
                    </div>
                    <div class="socials">
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
                <div class="card">
                    <div class="image">
                        <img src={img} />
                    </div>
                    <div class="info_card">
                        <h4>Enzo Enrico</h4>
                        <h5>Lead Developer</h5>
                    </div>
                    <div class="socials">
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