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
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

const documentService = {
  createDocument,
  getDocuments,
}

export default documentService;
