import React, { useState } from 'react';
import { toast } from 'react-toastify'
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    employeeId: ''
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, message } = useSelector(state => state.auth);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  }

  return (
    <>
      <section className="heading">
        <h1 >
          <FaSignInAlt /> Iniciar Sesión
        </h1>
        <p>Porfavor inicie sesión</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="email" className="form-control" id="email" name="email" value={email} onChange={onChange} placeholder="Ingrese su correo" required />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" name="password" value={password} onChange={onChange} placeholder="Ingrese su contraseña" required />
          </div>
          <div className="form-group">
            <button className="btn btn-block">
              Registrarse
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login