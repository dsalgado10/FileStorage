import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    employeeId: '',
    password: '',
    password2: '',
  });

  const { name, email, employeeId, password, password2 } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth)


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
        employeeId,
        password,
      }

      dispatch(register(userData))
        .unwrap()
        .then((user) => {
          // Al hacer wrap a la AsyncThunkAction se puede navegar al usuario cuando
          // se obtiene un response correcto de la API o catch la AsyncThunkAction
          // rejection para mostrar un mensaje de error
          toast.success(`Usuario registrado - ${user.name}`)
          navigate('/')
        })
        .catch(toast.error)
    }
  }

  if (isLoading) {
    return <Spinner />
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
            <input type="text" className="form-control" id="employeeId" name="employeeId" value={employeeId} onChange={onChange} placeholder="Ingrese su cóodigo de empleado" required />
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