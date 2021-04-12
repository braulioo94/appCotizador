import React,{useState} from 'react';
import Header from './componente/Header';
import styled from '@emotion/styled' ;
import Formulario from './componente/Formulario'
import Resumen from './componente/Resumen'
import Resultado from './componente/Resultado'
import Spinner from './componente/Spinner'


const Contenedor = styled.div `
  max-width: 600px ;
  margin : 0 auto ;

 `; 

 const ContenedorFormulario = styled.div`
  background-color:#FFF ; 
  padding: 3rem ;
 
 `;



function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion : 0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }

  }) ; 


  const[cargando , guardarCargando] = useState (false) ;

  //extrae los datos
  const {datos, cotizacion} = resumen ;


  return (
    <Contenedor className="App">
      <Header 
      titulo='Cotizador de Seguro'
      />

      
    <ContenedorFormulario>

      
        <Formulario 
        guardarResumen={guardarResumen}
        guardarCargando={guardarCargando}
        />
        {cargando ? <Spinner />  : null}
        

        <Resumen 
        datos={datos}
        />


        {!cargando ? <Resultado  cotizacion={cotizacion}/>  : null  }
        

    </ContenedorFormulario>


    </Contenedor>
  );
}

export default App;
