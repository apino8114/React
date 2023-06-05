import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import FormAddWorker from './components/FormAddWorker/FormAddWorker';
import ListWorker from './components/ListWorker/ListWorker';
import { lista } from "../src/components/Lista";

function App() {
  const [listaColab, setListaColab] = useState(lista);

  const handleClickAdd = (e) => {
    setListaColab([...listaColab, { id: listaColab.length + 1, ...e }]);
  };

  const handleSearchNavBar = (listafilter) => {
    const newLista = listafilter.length === 0 ? lista : listafilter;
    setListaColab([...newLista]);
  };

  return (
    <>
      <NavBar onChangeNavBar={(e)=> handleSearchNavBar(e)} lista={listaColab} />
      <section>
        <FormAddWorker onClickAddWorker={(e)=>handleClickAdd(e)} />
        <hr />
        <ListWorker lista={listaColab} />
      </section>
    </>
  );
}

export default App;
