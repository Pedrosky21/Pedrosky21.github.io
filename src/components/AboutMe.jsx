import yo from '../images/yo.jpeg';
import blueLockLogo from '../images/blue-lock-logo.png'
import isagi from '../images/isagi.png';
import gojo from '../images/gojo.png';
import isagiGoal from '../images/isagi-goal.jpeg';
import nagi from '../images/nagi.jpeg';
import nagiIsagi from '../images/nagi-isagi.jpeg';
import '../styles/about-me.css'

const Inicio = () => {
    return (
        <>
            <h1 className="name">Pedro Arreguez</h1>
            <div className="my-things">
                <div className="just-me ms-3">
                    <img className="my-picture" src={yo} alt="Imagen mia" />
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
                    <a className="link" href="https://steamcommunity.com/profiles/76561199241118261/" target="_blank" rel="noopener noreferrer">
                        <i className="insta-icon bi bi-steam"></i>
                        <p className="icon-name">Steam</p>
                    </a>
                </div>
            </div>
            <div className="ms-3">
                <p>I'm just a guy</p>
                <p>The site it's just created (looks better on PC), later I'm gonna add the mangas I read and the videogames I play :)</p>
            </div>
            <div className="logo mt-3 mb-5">
                <img id="blue-lock-logo" src={blueLockLogo} alt="blue lock logo" />
            </div>
            <div className="manga">
                <img className="manga-img" src={isagi} alt="isagi" />
                <div id="carousel-manga" className="carousel ms-2 me-2 carousel-dark slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carousel-manga" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel-manga" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel-manga" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={isagiGoal} className="d-block w-100" alt="isagi goal" />
                            <div className="carousel-caption mx-auto d-none d-md-block">
                                <h5>Isagi Yoichi</h5>
                                <p>His goal during the match against U-20 Japan.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={nagiIsagi} className="d-block w-100" alt="nagi and isagi" />
                            <div className="carousel-caption mx-auto d-none d-md-block">
                                <h5>Isagi and Nagi</h5>
                                <p>Their play during the U-20 match.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={nagi} className="d-block w-100" alt="nagi" />
                            <div className="carousel-caption mx-auto d-none d-md-block">
                                <h5>Nagi</h5>
                                <p>My favorite panel of him.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel-manga" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel-manga" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <img className="manga-img" src={gojo} alt="gojo" />
            </div>
        </>
    )
}

export default Inicio;