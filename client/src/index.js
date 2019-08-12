import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//example -> para testar, comentar o import do app ^ e importar , {Component} no react 
// import App2 from './components/example/videoExample'
// class App extends Component {
//     render () {        
//         return (
//             <App2 placeholderDoInput="nome" banana="laranja" />            
//         )
//     };
// }
ReactDOM.render(<App />, document.getElementById('root'));