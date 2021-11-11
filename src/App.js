import React from 'react';
import Buscador from './buscador/buscador.js'
import Resultado from './resultados/res.js'


class App extends React.Component{
  state = {
    termino: "",
    image: []

  }

  consultarApi = () => {
    //const termino = this.state.termino;
 
    const termino = this.state.termino;
    const url= `https://pixabay.com/api/?key=24266200-16a452c1dd5c5d7b2cb1eee1c&q=${termino}&per_page=100`;
    console.log(url);

    fetch(url)
    .then(resp => resp.json())
    .then(res => this.setState({image : res.hits}))
    .then(res => console.log(this.state.image))
  }

  DatosBusqueda = (termino) => {
    console.log(termino)
    this.setState({
      termino
    }, () => {
      this.consultarApi();  //hace un CallBack (llama) a la funcion 'ConsultarApi' y le agrega el resultado de la busqueda que ingreso el usuario
    }
    );
  }
  render(){

  
    return (
      <div className="App container">
        <div className="jumbotron">
          <p className="lead text-center">JoniMujica Front-End developer (Programmer at ReactJS)</p>
          <p className="lead text-center">Buscador de imagenes</p>
          <Buscador
            DatosBusqueda={this.DatosBusqueda}
           />
        </div>
        <Resultado 
          img={this.state.image}
        />
        {this.state.termino}
      </div>
    );
  }
}

export default App;
