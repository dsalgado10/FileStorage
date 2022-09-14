import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
function TicketItem({ document }) {
  return (
    <div className='ticket'>
      <div><a href="myurl" download> <FaDownload /> {document.file}</a></div>
      <div>{document.product}</div>
      <div>{new Date(document.createdAt).toLocaleDateString('en-US')}</div>
      <Link to={`/document/${document._id}`} className='btn btn-danger btn-sm'>
        Borrar
      </Link>
    </div>
  )
}

export default TicketItem;
