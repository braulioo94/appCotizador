import React,{useState} from 'react' ;
import styled from '@emotion/styled' ;
import {obtenerDiferenciaYear} from '../helper'
import {calcularMarca} from '../helper'
import {obtenerPlan} from '../helper'




const Campo = styled.div `
    display:flex ;
    margin-bottom: 1rem ;
    align-items:center
` ;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block ;
    width: 100%;
    padding:1rem ;
    border: 1px solid #080707 ;
    -webkit-appearance: none ;

`;

const InputRadio = styled.input`
    margin : 0 1rem ;
`;


const Boton = styled.button`
    background-color:#013035 ;
    font-size:16px ;
    width:100% ;
    padding:1rem ;
    color:#fff ;
    text-transform:uppercase ;
    font-weight:bold ;
    border: none ;
    transition:background-color .9s ease ; //HACE EL CAMBIO DEL COLOR DE HOVER EN 3 SEGUNDOS, DE APOCO
    margin-top:2rem ;

    //ES UN SIMILAR AL EVENTO ON HOVER EN SASS
    &:hover {
        background-color:#26C6DA ;
        cursor:pointer;
        font-size:18px;
    }
`;

const Error = styled.div`
    background-color: red ;
    color:white ;
    padding : 1rem ;
    width: 100% ;
    text-align:center;
    margin-bottom:2rem;
`;


const Formulario = ({guardarResumen , guardarCargando}) => {

    const[datos, guardarDatos]=useState({
        marca: '',
        year:'' ,
        plan: ''
    });
    const[error, guardarError]= useState(false)

    //EXTRAER LOS VALORES 
    const{marca, year, plan} = datos ;

   const  obtenerInformacion = e => {

    guardarDatos({
        ...datos,
        [e.target.name]: e.target.value 
    })


   }
   //CUANDO EL USUARIO HACE SUBMIT
    const cotizarSeguro = e =>{
        e.preventDefault() ;
    
        //VALIDAR
        if(marca.trim()=== '' || year.trim()===''|| plan.trim() === ''){
            guardarError(true)
            console.log('asd')
            return ;
        }
       guardarError(false)
        

       //UNA BASE DE 2000 EN AÑOS
       let resultado = 2000 ;

       //obtener la diferencia de años, funcion importadada desde helpers,

       const diferencia = obtenerDiferenciaYear(year) ;
       

       //por cada año hay que restar el 3%
       resultado -= ((diferencia * 3 )* resultado) / 100

        

       //Americano 15%
       //asiatico 5%
       //europeo 30%
       resultado = (calcularMarca(marca) * resultado).toFixed(2)  ;
       

        //Calcular por el tipo de plan
        resultado = parseFloat(obtenerPlan(plan) * resultado).toFixed(2) ;

        guardarCargando(true);

        setTimeout(() => {
            guardarCargando(false)

            //guardar total
            guardarResumen({
            cotizacion: resultado ,
            datos
        }) ;

        },3000 )

        
        

    }




    return (  
        <form  onSubmit={cotizarSeguro}>

        {error ? <Error>Todos los campos son obligatorios</Error>  : null   }

            <Campo>
                <Label > Marca</Label>
                <Select 
                    name="marca"
                    value ={marca} 
                    onChange={obtenerInformacion}

                >

                    <option value="">--Seleccione--</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>

                    
                </Select>
            </Campo>


            <Campo>
                <Label > Año</Label>
                <Select 
                    name="year"
                    value ={year} 
                    onChange={obtenerInformacion}
                >

                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>

                    
                </Select>
            </Campo>
            
            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked ={plan ==="basico"}
                    onChange={obtenerInformacion}
                /> Básico

                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked ={plan ==="completo"}
                    onChange={obtenerInformacion}

                /> Completo
            </Campo>

            <Boton type='submit'>Cotizar</Boton>


        </form>


    );
}
 
export default Formulario;