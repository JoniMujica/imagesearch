import React from 'react';

class Buscador extends React.Component{
    busquedaRef = React.createRef();

        ObtenerDatos = (e) => {
            e.preventDefault();
            const termino = this.busquedaRef.current.value;
            this.props.DatosBusqueda(termino);
            console.log(termino)
        }
    render(){
        return(
            <form onSubmit={this.ObtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen" /> 
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar...." /> 
                    </div>
                </div>
            </form>
         );
    }
}

export default Buscador;