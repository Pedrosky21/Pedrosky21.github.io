import yo from '../images/yo.jpg';

const Inicio = () => {
    return (
        <>
            <div className='ms-3'>
                <h1>Pedro Arreguez</h1>
                <img src={yo} alt="Imagen mia" width="500"/>
                <p>I'm just a guy</p>
                <p>The site it's just created, later I'm gonna add the mangas I read and the videogames I play :)</p>
                <p>I'm using React and Bootstrap</p>
            </div>
        </>
    )
}

export default Inicio;