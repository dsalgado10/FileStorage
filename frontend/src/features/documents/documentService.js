import axios from 'axios'
const API_URL = '/api/documents/'

// Create new document
const createDocument = async (documentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, documentData, config)

  return response.data
}

// Get user documents
const getDocuments= async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config)
  console.log(response.data)
  return response.data
};

// Get user document
const getDocument = async (documentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + documentId, config)

  return response.data
};

// Delete document
const deleteDocument = async (documentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(
    API_URL + documentId,
    config
  )

  return response.data
};

const documentService = {
  createDocument,
  getDocuments,
  getDocument,
  deleteDocument,
}

export default documentService;
