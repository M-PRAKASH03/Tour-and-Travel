import "./FooterStyles.css"


function Footer(){

    return(
        <>
        <div className="footer">
            <div className="top">
                <div className="first">
                    <h1>Tharas</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div className="second">
                    <a  href="https://www.facebook.com/" title="Facebook">
                        <i className="fa-brands fa-facebook-square"></i>      
                    </a>
                    <a href="https://www.instagram.com/" title="Instagram">
                        <i className="fa-brands fa-instagram-square"></i>      
                    </a>
                    <a href="https://www.behance.net/" title="Behance">
                        <i className="fa-brands fa-behance-square"></i>      
                    </a>
                    <a href="https://twitter.com/i/flow/login" title="Twitter">
                        <i className="fa-brands fa-twitter-square"></i>      
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Projects</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Projects</a>
                    <a href="/">All Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
                
            </div>
        </div>
        </>
    )



}
export default Footer;