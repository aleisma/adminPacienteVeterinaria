import React, { Component } from 'react';
import Header from './componentes/header/Header';
import AgregarCita from './componentes/agregarCita/AgregarCita';
import ListaCitas from './componentes/listadocitas/ListaCitas';


class App extends Component {
  state = {
    citas: []
  }
  
  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }

  }
  componentDidUpdate() {
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )

  }



  crearCita = (nuevaCita) => {
  
    //creo una copia de state con el express operation y le paso lo del form
    const citas = [...this.state.citas, nuevaCita];
  
    //cambio el valor del state
    this.setState({
      citas

    });
  }
  borrarCita = id => {
    console.log(id);
    //Obtener copia del state
    const citasActuales = [...this.state.citas];
    console.log(citasActuales);

    //Borro el elemento del state
    const citas = citasActuales.filter(cita =>cita.id !== id );
    
    // Actualizo el state
    this.setState({
      citas
    });
    //borrar
  }
  render(){
    return (
      <div className="container">
        <Header
        titulo={'Pacientes desde Veterinaria'}
        />
        <div className="row">
          <div className="col-md-6 ">
            <AgregarCita
                crearCita={this.crearCita}
            />
          </div>
          <div className="col-md-6">
            <ListaCitas
                citas={this.state.citas}
                borrarCita={this.borrarCita}
            />
          </div>
        </div>  
      </div>
    );
  }
 
}

export default App;
