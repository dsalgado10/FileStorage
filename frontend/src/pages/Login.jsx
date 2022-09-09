import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector(state => state.auth);

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

    dispatch(login(userData))
      .unwrap()
      .then((user) => {
        // NOTA: al desenvolver AsyncThunkAction, podemos navegar al usuario después
        // obtener una buena respuesta de nuestra API o capturar AsyncThunkAction
        // rechazo para mostrar un mensaje de error
        toast.success(`Ingresado como ${user.name}`)
        navigate('/')
      })
      .catch(toast.error)
  }

  if (isLoading) {
    return <Spinner />
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
              Ingresar
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login