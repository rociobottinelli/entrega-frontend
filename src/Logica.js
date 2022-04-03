import Botones from './Botones';
import data from './data.json';
import React from 'react';


class Logica extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      opcionAnterior: 0,
      contador: 0,
      opcionesAnteriores: ""
    };
    
  }
  componentWillUnmount(){
    if (this.state.contador === 8 || (this.state.contador === 7 && this.state.opcionAnterior === 'a')) {
      alert("Ha finalizado el juego") 
    }
  }

  elegirOpcion = (e) => {

    const ID_opcion = e.target.id;

    // Primera opción A 
    if (ID_opcion === 'A' && this.state.contador === 0) {
      this.setState({
        opcionAnterior: 'a',
        contador: this.state.contador + 1,
        opcionesAnteriores: " A "
      });

      // Primera opción B      
    } else if (ID_opcion === 'B' && this.state.contador === 0) {
      this.setState({
        opcionAnterior: 'b',
        contador: this.state.contador + 2,
        opcionesAnteriores: " B "
      });


      //BOTON A     
      // Opcion A después de A
    } else if (ID_opcion === 'A' && this.state.contador > 0 && this.state.opcionAnterior === 'a') {
      this.setState({
        opcionAnterior: 'a',
        contador: this.state.contador + 2,
        opcionesAnteriores: this.state.opcionesAnteriores + " A "
      });

      // Opcion B después de A
    } else if (ID_opcion === 'B' && this.state.contador > 0 && this.state.opcionAnterior === 'a') {
      this.setState({
        contador: this.state.contador + 3,
        opcionAnterior: 'b',
        opcionesAnteriores: this.state.opcionesAnteriores + " B "
      });

      // Opcion A después de B
    } else if (ID_opcion === 'A' && this.state.contador > 0 && this.state.opcionAnterior === 'b') {
      this.setState({
        opcionAnterior: 'a',
        contador: this.state.contador + 1,
        opcionesAnteriores: this.state.opcionesAnteriores + " A "
      });

      //Opción B después de B
    } else if (ID_opcion === 'B' && this.state.contador > 0 && this.state.opcionAnterior === 'b') {
      this.setState({
        opcionAnterior: 'b',
        contador: this.state.contador + 2,
        opcionesAnteriores: this.state.opcionesAnteriores + " B "
      });
    }
    

  };

  render() {
  
    return (
      <div className="layout">
        <h2 className="historia">{data[this.state.contador].id}</h2>
        <h1 className="historia">{data[this.state.contador].historia}</h1>

        <Botones
          elegirOpcion={this.elegirOpcion}
          opcion_A={data[this.state.contador].opciones.a}
          opcion_B={data[this.state.contador].opciones.b} />


<div class="recordatorio">
           <h3> Selección anterior: {this.state.opcionAnterior}</h3>
           <h3> Historial de opciones elegidas: {this.state.opcionesAnteriores} </h3>
        </div>
      </div>

      
    );
  
  }
}

export default Logica;