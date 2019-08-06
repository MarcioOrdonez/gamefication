// npm vai chamar ele, por esse nome. vai colocar toda minha aplicação aqui dentro que vai por dentro
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();