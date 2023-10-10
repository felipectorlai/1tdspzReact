import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import ListaCarros from './Pages/ListaCarros';
function App() {
  return (
    <>
     <h1>CONFIGURAÇÃO DE UM LOGO</h1>
<hr/>
      <BrowserRouter>
        <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/lista' element={<ListaCarros />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
