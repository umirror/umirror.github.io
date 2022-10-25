import React from "react";
import "./Css/Footer.css"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"


function Footer() {
    return (
        <div className="main">
            <div className="footer-wrapper">
                <div className="icons">
                    <a className="icons-footer" href="https://www.instagram.com/umirror.uinovations">
                        <FaInstagram />
                    </a>
                    <a className="icons-footer" href="https://twitter.com/uMirror_">
                        <FaTwitter />
                    </a>
                </div>
            </div>
                <div className="copyright">
                    uMirror 2022 - MIT License Under Fair Use
                </div>
        </div>

    )
}

export default Footer