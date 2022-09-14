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
    category: 'Tecnología',
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
      navigate('/nuevo-documento')
    }

    dispatch(reset())
  }, [dispatch, isError, isSuccess, navigate, message])

  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', newDocument.file);
    formData.append('product', newDocument.product);
    formData.append('category', newDocument.category);
    formData.append('description', newDocument.description);
    console.log(newDocument.file);
    dispatch(createDocument(formData))
    navigate('/documents')
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <BackButton url='/documents' />
      <section className='heading'>
        <h1>Subir Documento</h1>
        <p>Por favor llene el formulario</p>
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
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='category'>Categoría</label>
            <select
              name='category'
              id='category'
              value={newDocument.category}
              onChange={handleChange}
            >
              <option value='Contabilidad'>Contabilidad</option>
              <option value='Recursos Humanos'>Recursos Humanos</option>
              <option value='Tecnología'>Tecnología</option>
              <option value='Producción'>Producción</option>
              <option value='Marketing'>Marketing</option>
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
