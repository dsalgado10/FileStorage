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
      <table style={{ width: '100%', border: '1px solid #ddd' }}>
        <tr>
          <th>Documento</th>
          <th>Fecha</th>
        </tr>
        <tr>
          <td>Archivo</td>
        </tr>
        <tr>
          <td>Archivo</td>
        </tr>
      </table>
      <Link style={{ marginTop: '16px' }} to='/nuevo-documento' className="btn btn-block">
        <FaFileAlt /> Subir nuevo documento
      </Link>

    </>
  )
}

export default Home