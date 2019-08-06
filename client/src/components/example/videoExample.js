
// import ReactDOM from 'react-dom';
import React, {Component} from 'react';

// para fazer uma função de contador
// class App extends Component {
//     constructor () {
//         super();
//         this.state ={
//             contador: 0
//         };
//     };
//     _somarContador () {
//         this.setState({
//             contador: this.state.contador + 1
//         });
//     };
//     render () {
//         return (
//             <div>
//                 <p>A soma é {this.state.contador}</p>
//                 <button onClick={() => this._somarContador()}> Somar</button>
//             </div>
//         );
//     };
// };

// export default App;
// ReactDOM.render(<App/>, document.getElementById('root'));


//para passar um objeto
export default class extends Component {
    constructor() {
        super();
        this.state = {
            valorDoBotao: "Enviar formulário"
        };
    };
    _mudarValorDoBotao () {
        this.setState({
            valorDoBotao: "nao enviar o formulario"
        });
    };
    _voltarValorDoBotao () {
        this.setState({
            valorDoBotao: "Enviar formulario"
        });
    };
    render () {
        // console.log( this.props)
        return (
            <form>
                <input type="text" placeholder={this.props.placeholderDoInput} />
                <button onMouseOut={() => this._voltarValorDoBotao()} onMouseOver={() => this._mudarValorDoBotao()} >{this.state.valorDoBotao}</button>
            </form>
        );
    };
};