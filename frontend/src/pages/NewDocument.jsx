import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createDocument, reset } from '../features/documents/documentSlice';
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton';

function NewDocument() {
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.documents
  );

  const [newDocument, setNewDocument] = useState({
    product: 'Empresa',
    description: '',
    file: ''
  });


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setNewDocument({ ...newDocument, [e.target.name]: e.target.value })
  };

  const handleFile = (e) => {
    setNewDocument({ ...newDocument, file: e.target.files[0] })
  };

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      dispatch(reset())
      navigate('/documents')
    }

    dispatch(reset())
  }, [dispatch, isError, isSuccess, navigate, message])

  const onSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append('file', newDocument.file);
    formData.append('product', newDocument.product);
    formData.append('description', newDocument.description);
    console.log(newDocument.file);
    dispatch(createDocument(formData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <BackButton url='/' />
      <section className='heading'>
        <h1>Subir Documento</h1>
        <p>Porfavor llene el formulario</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <div className='form-group'>
            <label htmlFor='product'>Empresa</label>
            <select
              name='product'
              id='product'
              value={newDocument.product}
              onChange={handleChange}
            >
              <option value='Empresa'>Empresa</option>
              <option value='Empresa'>Empresa</option>
              <option value='Empresa'>Empresa</option>
              <option value='Empresa'>Empresa</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Descripción del documento</label>
            <textarea
              name='description'
              id='description'
              className='form-control'
              placeholder='Descripción'
              value={newDocument.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className='form-group'>
            <label htmlFor='file'>Subir archivo</label>
            <input type='file' name='file' className='form-control-file' onChange={handleFile} />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Subir</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewDocument;
