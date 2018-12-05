import React from 'react';
import './Login.css';

class Login extends React.Component {
  render() {

    const login = (
      <div className="container ">
        <h1 className="registertitle"> Iniciar Sesion </h1>
        <div className="container centrado">
          <div className="row">

            <div className="col-xl">
              <label className="tag">Usuario: </label>
              <input type="text" />
            </div>
          </div>

          <div className="row">
            <div className="col-xl">
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

            <div className="col-xl">
              <label className="registerlabel">Nombres: </label>
              <input className="registerinput" type="text" />
            </div>

            <div className="col-xl">
              <label className="registerlabel">Apellidos: </label>
              <input className="registerinput" type="text" />
            </div>
          </div>

          <div className="row">

            <div className="col-xl">
              <label className="registerlabel">Usuario: </label>
              <input className="registerinput" type="text" />
            </div>

            <div className="col-xl">
              <label className="registerlabel">Identidad: </label>
              <input className="registerinput" type="text" />
            </div>
          </div>

          <div className="row">

            <div className="col-xl">
              <label className="registerlabel">Contraseña: </label>
              <input className="registerinput" type="password" />
            </div>

            <div className="col-xl">
              <label className="registerlabel">Confirmar Contraseña: </label>
              <input className="registerinput" type="password" />
            </div>
          </div>

          <div className="row">

            <div className="col-xl">
              <label className="registerlabel">Telefono/Celular: </label>
              <input className="registerinput" type="text" />
            </div>

            <div className="col-xl content">
              <label className="registerlabel">Correo electronico: </label>
              <input className="registerinput" type="e-mail" />
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