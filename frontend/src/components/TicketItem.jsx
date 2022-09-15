import { toast } from 'react-toastify';
import { FaDownload } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteDocument, getDocuments } from '../features/documents/documentSlice';
import { useNavigate } from 'react-router-dom';


function TicketItem({ document }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteDocument(document._id))
    dispatch(getDocuments())
    toast.success('Documento Eliminado')
    navigate('/documents')
  }

  return (
    <div className='ticket'>
      <div><a href="myurl" download> <FaDownload /> {document.file}</a></div>
      <div>{document.product}</div>
      <div>{new Date(document.createdAt).toLocaleDateString('en-US')}</div>
      <button onClick={handleDelete} className='btn btn-danger'>
        Borrar
      </button>
    </div>
  )
}

export default TicketItem;
