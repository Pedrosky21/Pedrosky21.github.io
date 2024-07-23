import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">About Me</Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/mangas">Mangas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/movies">Horror Movies</Link>
                            </li>
                        </ul>
                </div>
            </nav>
        </>
    )
}

export default Menu;