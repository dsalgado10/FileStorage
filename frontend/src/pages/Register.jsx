import React, { useState } from 'react';
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    employeeId: ''
  });

  const { name, email, password, password2, employeeId } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error('Contraseñas no coinciden');
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
            <input type="text" className="form-control" id="name" name="name" value={name} onChange={onChange} placeholder="Ingrese su nombre" required/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" id="email" name="email" value={email} onChange={onChange} placeholder="Ingrese su correo" required/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" name="password" value={password} onChange={onChange} placeholder="Ingrese su contraseña" required/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password2" name="password2" value={password2} onChange={onChange} placeholder="Confirme su contraseña" required/>
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