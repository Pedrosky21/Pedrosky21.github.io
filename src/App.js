import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './components/AboutMe';
import Mangas from './components/Mangas';
import Movies from './components/Movies';

import './App.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Necesaria a importar para el carousel de bootstrap

const App = () => {
    return (
        <>
            <div id="contenido">
                <Menu />
                <div>
                    <Routes>
                        <Route path='/' element={<Inicio></Inicio>} />
                        <Route path='/mangas' element={<Mangas></Mangas>} />
                        <Route path='/movies' element={<Movies></Movies>} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App;