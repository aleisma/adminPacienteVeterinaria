import React, { Component } from 'react';
import PropTypes from 'prop-types';

//libreria para crear Id
import uuid from 'uuid';

class AgregarCita  extends Component {
    //Refs
    nombreMascotaRef = React.createRef();
    nombreDueñoRef = React.createRef();
    fechaRef = React.createRef();
    horaRef = React.createRef();
    sintomasRef = React.createRef();
    
    state = {
        error:false
    }


    crearNuevacita = e => {
        e.preventDefault();
        const mascota = this.nombreMascotaRef.current.value, 
              dueño = this.nombreDueñoRef.current.value,
              fecha = this.fechaRef.current.value,
              hora = this.horaRef.current.value,
              sintomas = this.sintomasRef.current.value;

              if(mascota === '' || dueño === '' || fecha === '' || fecha === '' || hora === '' || sintomas === '' ){
                  this.setState({
                      error:true
                  })

              }
              else{
                const nuevaCita = {
                    id: uuid(),
                    mascota,
                    dueño,
                    fecha,
                    hora,
                    sintomas
                }
                //SE ENVIA EL OBJETO HACIA EL PADRE PARA ACTUALIZAR EL STATE
                this.props.crearCita(nuevaCita);
        
                //REINICIAR EL FORM
                e.currentTarget.reset();

                //ELIMINA EL ERROR SI LO HAY
                this.setState({
                    error: false
                })

              }

        
       

    }
    render(){
        const existeError = this.state.error;

        return(
            
            <div className="card mt-4">
                <div className="card-body">
                </div>
                <h2 className="card-title text-center mb-5">
                    Agrega las citas aqui
                </h2>
                <form onSubmit={ this.crearNuevacita }>
      <div className="form-group row">
           <label className="col-sm-4 col-lg-2 col-form-label"><strong>Mascota</strong></label>
          <div className="col-sm-8 col-lg-10">
              <input type="text" ref={this.nombreMascotaRef} className="form-control-sm" placeholder="Nombre Mascota" />
          </div>
      </div>
      <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label"><strong>Dueño</strong></label>
          <div className="col-sm-8 col-lg-10">
              <input type="text" ref={this.nombreDueñoRef} className="form-control-sm"  placeholder="Dueño de la Mascota" />
          </div>
      </div>

       <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label"><strong>Fecha</strong></label>
          <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
              <input type="date" ref={this.fechaRef} className="form-control-sm" />
          </div>                            

          <label className="col-sm-4 col-lg-2 col-form-label "><strong>Hora</strong></label>
          <div className="col-sm-8 col-lg-4">
              <input type="time" ref={this.horaRef} className="form-control-sm" />
          </div>
      </div>

      <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label "><strong>Sintomas</strong></label>
          <div className="col-sm-8 col-lg-10">
              <textarea  ref={this.sintomasRef }className="form-control-lg"></textarea>
          </div>
      </div>
      
              <button type="submit" className="btn btn-success btn-lg btn-block">Agregar</button>
  </form>
  <hr></hr>
  {existeError ? <div className="col-12"> <div className="alert alert-danger text-center" role="alert">Todos los campos son Obligatorios!</div></div> : ''}

            </div>
            

        );
    }
}

AgregarCita.propTypes = {
    crearCita : PropTypes.func.isRequired
}

export default AgregarCita;