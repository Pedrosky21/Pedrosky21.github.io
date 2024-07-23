import '../styles/movie-card.css';

const Movie = ({ movie, image }) => {
    const arrayStars = []
    for (let i=0; i<movie.rate; i++) {
        arrayStars.push(<i className="bi bi-star-fill" style={{color: "#F3FF00"}}></i>)
    }

    return (
        <div className="card movie-card">
            <img src={image} alt={'titulo ' + movie.title} height='410'/>
            <h5 className="card-header">{movie.title}</h5>
            <div className="card-body">
                {
                    arrayStars.map( (star) => {
                        return (
                            star
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Movie;