import '../styles/presentation.css';
import yo from '../images/yo.jpeg';
import utn from '../images/logo-utn.png';
import bandera from '../images/bandera.svg';
import gmailLogo from '../images/logo-gmail.png';

const PresentationCard = () => {
    const email = 'pedroarreguez21@gmail.com';
    const subject = 'Asunto';
    const body = '';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <>
            <div className="presentation card text-light border-dark">
                <div className="card-body">
                    <div className="top-card">
                        <img className="mi-pic mt-0" src={yo} alt="yo"></img>
                        <h2 className="card-title ms-3 mt-0">Pedro Arreguez</h2>
                    </div>
                    <div className="middle-card mt-3">
                        <p>Personal Information</p>
                        <div className="middle-line">
                            <img className="utn-img" src={utn} alt="logo utn" />
                            <p className="ms-2 mb-0">Student - Systems Engineering at the Universidad Tecnológica Nacional</p>
                        </div>
                        <div className="middle-line mt-3 mb-3">
                            <img className="bandera-img" src={bandera} alt="bandera Argentina" />
                            <p className="ms-2 mb-0">Nationality: Argentina - Córdoba</p>
                        </div>
                    </div>
                    <div className="card-footer">
                        <p className="mb-1">Contact me - pedroarreguez21@gmail.com</p>
                        <div className="footer-mail">
                            <a href={mailtoLink} className="boton-contacto btn">
                                <img className="logo-gmail" src={gmailLogo} alt="logo gmail" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PresentationCard;