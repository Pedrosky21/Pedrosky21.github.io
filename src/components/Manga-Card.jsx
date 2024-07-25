import '../styles/manga-card.css';

const Manga = ({ manga, image }) => {
    return (
        <>
            <div className="manga-card card">
                <img className="card-img-top" src={image} alt={'titulo ' + manga.title}/>
                <h5 className="card-header">{manga.title}</h5>
                <div className="card-body">
                    {
                        manga.finished? <p>Finished</p> : <p>Not finished yet</p>
                    }
                </div>
            </div>
        </>
    )
}

export default Manga;