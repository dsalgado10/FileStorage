import React from 'react'
import { Link } from 'react-router-dom'
import { FaFileAlt } from 'react-icons/fa'

function Home() {
  return (
    <>
      <section className="heading">
        <h1>Empresa</h1>
        <p>Documentos</p>
      </section>
      <Link style={{ marginTop: '16px' }} to='/nuevo-documento' className="btn btn-block">
        <FaFileAlt /> Subir nuevo documento
      </Link>

    </>
  )
}

export default Home