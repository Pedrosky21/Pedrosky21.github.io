import mangas_list from '../mangas.json';

import '../styles/mangas-interface.css';

import Manga from './Manga-Card.jsx';
import BlueLock from './BlueLock.jsx';

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAll(require.context('../images/manga-covers', false, /\.(png|jpe?g|svg)$/));

const Mangas = () => {
    // Se dividen las tarjetas en grupos de 5
    const chunkedData = [];
    for (let i = 0; i < mangas_list.length; i += 4) {
        chunkedData.push(mangas_list.slice(i, i + 4));
    }

    return (
        <>
            <h2 className="ms-3">Mi collection</h2>
            <p className="ms-4">There's a few more that I'm gonna add later</p>
            <div className="container">
                {chunkedData.map((row, rowIndex) => (
                    <div className="row ms-2 w-100" key={rowIndex}>
                        {row.map(man => (
                            <div className="manga col-sm-3 mb-3 mt-3">
                                <Manga manga={man} image={images[man.title + '.jpg']}></Manga>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <BlueLock></BlueLock>
        </>
    )
}

export default Mangas;