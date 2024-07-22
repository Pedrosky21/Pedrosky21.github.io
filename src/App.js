import {Route, Routes} from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './components/AboutMe';
import Mangas from './components/Mangas';
import Movies from './components/Movies';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <Menu/>
            <div>
                <Routes>
                    <Route path='/' element={<Inicio></Inicio>}/>
                    <Route path='/mangas' element={<Mangas></Mangas>}/>
                    <Route path='/movies' element={<Movies></Movies>}/>
                </Routes>
            </div>
        </>
    )
}

export default App;