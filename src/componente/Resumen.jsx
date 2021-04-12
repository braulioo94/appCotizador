import React from 'react' ;
import styled from '@emotion/styled' ;

import {primerMayuscula} from '../helper'



const ContenedorResumen = styled.div`
    padding: 1rem ;
    text-align: center ;
    background-color: #013035 ;
    color:#FFF ;
    margin-top: 1rem 
` ;


const Resumen = ({datos}) => {
   
    const{marca, year, plan} = datos
   
    if(marca ===''  || year === '' || plan === ''){
        return null ;
    }
    
    return (  
       <ContenedorResumen>
        <h2>Resumen de cotización</h2>
        <ul>
            <li>Marca: {primerMayuscula(marca)}</li>
            <li>Año: {primerMayuscula(year)}</li>
            <li>Plan: {primerMayuscula(plan)}</li>
        </ul>
        </ContenedorResumen>
    );
}
 
export default Resumen;
