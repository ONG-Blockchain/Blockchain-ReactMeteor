import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
  render() {

    const login = (
      <div className="container ">
        <h1 className="registertitle"> Iniciar Sesion </h1>
        <div className="container centrado">
          <div className="row">

            <div className="col-sm">
              <label className="tag">Usuario: </label>
              <input type="text" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <label className="tag">Contraseña: </label>
              <input type="password" />
            </div>
          </div>
        </div>
        <button className="btn btn-secondary centrar">Login</button>
      </div>
    );

    const register = (
      <div className="container">
        <h1 className="registertitle">Registrarse</h1>

        <div className="container">

          <div className="row">

            <div className="col-sm">
              <label>Nombres: </label>
              <input type="text" />
            </div>

            <div className="col-sm">
              <label>Apellidos: </label>
              <input type="text" />
            </div>
          </div>

          <div className="row">

            <div className="col-sm">
              <label >Usuario: </label>
              <input type="text" />
            </div>

            <div className="col-sm">
              <label>Identidad: </label>
              <input type="text" />
            </div>
          </div>

          <div className="row">

            <div className="col-sm">
              <label>Contraseña: </label>
              <input type="password" />
            </div>

            <div className="col-sm">
              <label>Confirmar Contraseña: </label>
              <input type="password" />
            </div>
          </div>

          <div className="row">

            <div className="col-sm">
              <label>Telefono/Celular: </label>
              <input type="text" />
            </div>

            <div className="col-sm content">
              <label>Correo electronico: </label>
              <input type="e-mail" />
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