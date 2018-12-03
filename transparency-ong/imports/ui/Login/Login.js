import React from 'react';
import './Login.css';

class Login extends React.Component {
  render() {

    const login = (
      <div className="content">
        <h1 align="center"> Login </h1>
        <div>
          <label>Usuario: </label>
          <input type="text" />
        </div>
        <div>
          <label>Contraseña: </label>
          <input type="password" />
        </div>
        <div className="btn">
          <button>Login</button>
        </div>
      </div>
    );

    const register = (
      <div className="container">
        <h1>Registrarse</h1>

        <div className="container">
        
          <div className="row">
        
            <div className="col">
              <label>Nombres: </label>
              <input type="text"/>
            </div>
        
            <div className="col">
              <label>Apellidos: </label>
              <input type="text"/>
            </div>
          </div>
        
          <div className="row">
        
            <div className="col">
            <label>Usuario: </label>
            <input type="text"/>
            </div>
        
            <div className="col">
            <label>Identidad: </label>
            <input type="text"/>
            </div>
          </div>
        
          <div className="row">
        
            <div className="col">
            <label>Contraseña: </label>
            <input type="password"/>
            </div>
        
            <div className="col">
            <label>Confirmar Contraseña: </label>
            <input type="password"/>
            </div>
          </div>
        
          <div className="row">
        
            <div className="col">
            <label>Telefono/Celular: </label>
            <input type="text"/>
            </div>
        
            <div className="col">
            <label>Correo electronico: </label>
            <input type="e-mail"/>
            </div>
          </div>
        
        </div>
        <button className="btn btn-dark">Registrar</button>
      </div>
    );

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {login}
          </div>
          <div className="col">
            {register}
          </div>
        </div>
      </div>

    )
  }
}
export default Login;