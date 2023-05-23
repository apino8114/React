
import './App.css';
import Autos from './Gpus.jsx';    
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header>Galería de Imágenes con React</Header>
      <Autos imagen="https://http2.mlstatic.com/D_NQ_NP_977948-MLA52993940407_122022-O.jpg" Marca="NVIDIA" Modelo="RTX4080"></Autos>
      <Autos imagen="https://centrale.cl/wp-content/uploads/Tarjeta-de-Video-EVGA-GeForce-RTX-3070-XC3-ULTRA-GAMING-LHR-1.jpeg" Marca="NVIDIA" Modelo="RTX3070"></Autos>
      <Autos imagen="https://newark.cl/up/2022/01/7_PNY-GeForce-RTX-3060Ti-DF-M-gr.png" Marca="NVIDIA" Modelo="RTC3060ti"></Autos>
      <Footer>Pie de pagina</Footer>
    </div>
  );
}

export default App;
