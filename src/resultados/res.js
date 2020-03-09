import React from 'react';
import Image from './image.js';


class Resultado extends React.Component{

    mostrarImagenes = () => {
        const imgres = this.props.img;  // la constante imgres es un 'array'
        if(imgres.length === 0) return null;  //valida el largo del array 'imgres', si es 0 , no returna nada
        console.log(imgres);

        return(
            <>
                <div className="col-12 p-5 row">
                    {imgres.map(imagen => (
                        <Image
                            key={imagen.id}
                            imageMap={imagen}
                         />
                    ))}

                </div>
            </>
        )
    }
    render(){
        return(
            <>
                { this.mostrarImagenes() }
            </>
        );
    }
}
export default Resultado;