import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDocuments, reset } from '../features/documents/documentSlice';
import { Link } from 'react-router-dom';
import { FaFileAlt } from 'react-icons/fa';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import TicketItem from '../components/TicketItem';

function Documents() {
  const { documents, isLoading, isSuccess } = useSelector(
    (state) => state.documents
  )

  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  useEffect(() => {
    dispatch(getDocuments())
  }, [dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <BackButton url='/' />
      <h1>Documentos</h1>
      <div className='tickets'>
        <div className='ticket-headings'>
        <div>Archivo</div>
          <div>Empresa</div>
          <div>Fecha</div>
          <div></div>
        </div>
        {documents.map((document) => (
          <TicketItem key={document._id} document={document} />
        ))}
      </div>
      <Link style={{ marginTop: '16px' }} to='/nuevo-documento' className="btn btn-block">
        <FaFileAlt /> Subir nuevo documento
      </Link>
      
    </>
  )
}

export default Documents
