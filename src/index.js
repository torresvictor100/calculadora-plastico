import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Calculator from './main/Calculador'

ReactDOM.render(
  <React.StrictMode>
    <div className='container' >
      <div>
        <Calculator />
      </div>
      <div className='instrusao'>
          <h1>esp = espessura</h1>
          <h1>mil = milheiros</h1>
          <h1>ads = adesivo</h1>
          <h1>lar = largura</h1>
          <h1>alt = altura</h1>
          <h1>far = fator</h1>
          <h1>To: total, Un: unidade</h1>
      </div>
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
