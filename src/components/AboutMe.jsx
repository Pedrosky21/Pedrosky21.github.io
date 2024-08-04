import PresentationCard from './PresentationCard';
import BlueLock from './BlueLock';

import bootstrapLogo from '../images/bootstrap-logo.png';
import reactLogo from '../images/react-logo.svg';
import javascriptLogo from '../images/logo-js.png';
import '../styles/about-me.css'

const Inicio = () => {
    return (
        <>
            <div className="my-things row">
                <div className="just-me col-sm mt-2 ms-3">
                    <PresentationCard></PresentationCard>
                </div>
                <div className="rrdd col-sm mt-2 ms-5 mb-3">
                    <h2 className="rrdd-title">RRDD</h2>
                    <div className="divider"></div>
                    <a className="rrdd-enl" href="https://www.instagram.com/pedroarreguez" target="_blank" rel="noopener noreferrer">
                        <i className="insta-icon bi bi-instagram"></i>
                        <p className="icon-name">Instagram</p>
                    </a>
                    <a className="rrdd-enl" href="https://www.tiktok.com/@terrorfy" target="_blank" rel="noopener noreferrer">
                        <i className="insta-icon bi bi-tiktok"></i>
                        <p className="icon-name">TikTok</p>
                    </a>
                    <a className="rrdd-enl" href="https://steamcommunity.com/profiles/76561199241118261/" target="_blank" rel="noopener noreferrer">
                        <i className="insta-icon bi bi-steam"></i>
                        <p className="icon-name">Steam</p>
                    </a>
                </div>
            </div>
            <div className="ms-3 mt-3">
                <p>I'm just a guy</p>
                <p>The site it's just created (looks better on PC), later I'm gonna add the mangas I read and the videogames I play :)</p>
            </div>
            <h2 className="technologies-header mt-4">Technologies used in this site</h2>
            <div className="technologies container mt-5 mb-5">
                <div>
                    <img className="tec-logo" src={javascriptLogo} alt="js" />
                    <p className="tec-text">JavaScript</p>
                </div>
                <div>
                    <img className="tec-logo" src={reactLogo} alt="react" />
                    <p className="tec-text">React</p>
                </div>
                <div>
                    <img className="tec-logo" src={bootstrapLogo} alt="bootstrap" />
                    <p className="tec-text">Bootstrap</p>
                </div>
            </div>

            <BlueLock></BlueLock>
        </>
    )
}

export default Inicio;