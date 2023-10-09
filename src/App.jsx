import Componente01 from './Componentes/Componente01'
import Componente02 from './Componentes/Componente02'
import Componente03 from './Componentes/Componente03'
function App (){
  let linguagem="JAVASCRIPTs";

  function clicouBotao(){
    alert("alerta da tela app");
  }
  return (
          <>
          <h1>OLÁ MUNDO !!!</h1>
          <hr />
          <Componente01 />
          <hr />
          <Componente02 />
          <hr />
          <Componente03 textoPai={linguagem} clicouPai={clicouBotao}/>
          <hr />

          </>
  )
}
export default App;
