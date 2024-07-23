import yo from '../images/yo.jpeg';
import isagi from '../images/isagi.png';
import gojo from '../images/gojo.png';
import '../styles/about-me.css'

const Inicio = () => {
    return (
        <>
            <div className="ms-3">
                <h1>Pedro Arreguez</h1>
                <img className="my-picture" src={yo} alt="Imagen mia" />
                <p>I'm just a guy</p>
                <p>The site it's just created (looks better on PC), later I'm gonna add the mangas I read and the videogames I play :)</p>
            </div>
            <div className="rrdd ms-3 mb-3">
                <h2 className="rrdd-title">RRDD</h2>
                <div className="divider"></div>
                <a className="link" href="https://www.instagram.com/pedroarreguez" target="_blank" rel="noopener noreferrer">
                    <i className="insta-icon bi bi-instagram"></i>
                    <p className="icon-name">Instagram</p>
                </a>
                <a className="link" href="https://www.tiktok.com/@terrorfy" target="_blank" rel="noopener noreferrer">
                    <i className="insta-icon bi bi-tiktok"></i>
                    <p className="icon-name">TikTok</p>
                </a>
            </div>
            <div className="manga">
                <img className="manga-img" src={isagi} alt="isagi" />
                <img className="manga-img" src={gojo} alt="gojo" />
            </div>
        </>
    )
}

export default Inicio;