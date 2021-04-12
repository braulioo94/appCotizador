export function obtenerDiferenciaYear(year ){

    return new Date ().getFullYear() - year
}


export function calcularMarca( marca){
    let incremento ;

    switch(marca){
        
        case'europeo':
            incremento=1.30 ;
            break ;
        case'americano':
            incremento=1.15;
            break ;
        case'asiatico':
            incremento=1.05 ;
            break ;     
        default:
             break; 
    }
    return incremento

}


export function obtenerPlan(plan) {

    
    return (plan ==='basico' ?1.20    :1.50 )

}


//MUESTRA LA PRIMER LETRA MAYUSCULA
    export function primerMayuscula(texto){    //Slice elimina la primer letra qu6e se va hacer mayuscula
        return texto.charAt(0).toUpperCase() + texto.slice(1)
    }
