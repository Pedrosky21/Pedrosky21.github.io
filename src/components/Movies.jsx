import movies_list from '../movies.json';

import Movie from './Movie';

import '../styles/movies-interface.css';

import movieHeader from '../images/movie-header.jpeg';

// Importar todas las imagenes
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAll(require.context('../images/movie-posters', false, /\.(png|jpe?g|svg)$/));


const Movies = () => {
    // Se dividen las tarjetas en grupos de 4
    const chunkedData = [];
    for (let i = 0; i < movies_list.length; i += 4) {
        chunkedData.push(movies_list.slice(i, i + 4));
    }

    // Si no se dividieran las tarjetas, quedarian todas en una sola fila
    /*
    <div className="container">
        <div className="row">
            {
                movies_list.map((mov, index) => {
                    return (
                        <>
                            <div className="col-sm-3 mb-3">
                                <Movie movie={mov} image={images[mov.title + '.jpeg']}></Movie>
                            </div>
                        </>
                    )
                })
            }
        </div>
    </div>
    */

    return (
        <>
            <div className="header-movies">
                <img className="header-image" src={movieHeader} alt="header" />
                <h2 className="header-movies-title ms-2">Horror movies</h2>
                <p className="header-text ms-4">A list of horror movies that I watched alone and rated cuz I felt like it. Rated from 1 to 6 stars.</p>
            </div>

            <div className="container">
                {chunkedData.map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {row.map(mov => (
                            <div className="col-md-3 mb-3 mt-3">
                                <Movie movie={mov} image={images[mov.title + '.jpeg']}></Movie>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Movies;