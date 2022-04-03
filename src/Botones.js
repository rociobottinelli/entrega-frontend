import React from "react";

class Botones extends React.Component{
    render() {
        return(
            <div className="opciones">
            <div className="opcion">
                <button className="botones" id="A"  onClick={this.props.elegirOpcion}>A</button>
                <h2>{this.props.opcion_A}</h2>
            </div>
            <div className="opcion">
                <button  className="botones" id="B" onClick={this.props.elegirOpcion}>B</button>
                <h2>{this.props.opcion_B}</h2>
            </div>
        </div>
        )
    }
}

export default Botones;