import React from 'react';
import './Login.css';

class Login extends React.Component {
  render() {

    const login = (
      <div className="container">
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
        <h1 className="registertitle">Registrarse</h1>

        <div className="container">
        
          <div className="row">
        
            <div className="col-sm">
              <label>Nombres: </label>
              <input type="text"/>
            </div>
        
            <div className="col-sm">
              <label>Apellidos: </label>
              <input type="text"/>
            </div>
          </div>
        
          <div className="row">
        
            <div className="col-sm">
            <label>Usuario: </label>
            <input type="text"/>
            </div>
        
            <div className="col-sm">
            <label>Identidad: </label>
            <input type="text"/>
            </div>
          </div>
        
          <div className="row">
        
            <div className="col-sm">
            <label>Contraseña: </label>
            <input type="password"/>
            </div>
        
            <div className="col-sm">
            <label>Confirmar Contraseña: </label>
            <input type="password"/>
            </div>
          </div>
        
          <div className="row">
        
            <div className="col-sm">
            <label>Telefono/Celular: </label>
            <input type="text"/>
            </div>
        
            <div className="col-sm">
            <label>Correo electronico: </label>
            <input type="e-mail"/>
            </div>
          </div>
        
        </div>
        <button className="btn btn-dark registerbtn">Registrar</button>
      </div>
    );

    return (
      <div className="background container-fluid">
        <div className="row">
          <div className="col login">
            {login}
          </div>
          <div className="col register">
            {register}
          </div>
        </div>
      </div>

    )
  }
}
export default Login;