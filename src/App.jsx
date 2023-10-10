//biblioteca de roteamento
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import ListaCarros from './pages/listaCarros'
import Sobre from './pages/sobre'

export default () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/listacarros' element={<ListaCarros/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}