import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { register } from '../features/auth/authSlice';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
        .unwrap()
        .then((user) => {
          // Al hacer wrap a la AsyncThunkAction se puede navegar al usuario cuando
          // se obtiene un response correcto de la API o catch la AsyncThunkAction
          // rejection para mostrar un mensaje de error
          toast.success(`Registered new user - ${user.name}`)
          navigate('/')
        })
        .catch(toast.error)
    }
  }

  return (
    <>
      <section className="heading">
        <h1 >
          <FaUser /> Registro
        </h1>
        <p>Porfavor cree un usuario</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" id="name" name="name" value={name} onChange={onChange} placeholder="Ingrese su nombre" required />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" id="email" name="email" value={email} onChange={onChange} placeholder="Ingrese su correo" required />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" name="password" value={password} onChange={onChange} placeholder="Ingrese su contraseña" required />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password2" name="password2" value={password2} onChange={onChange} placeholder="Confirme su contraseña" required />
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

export default Register