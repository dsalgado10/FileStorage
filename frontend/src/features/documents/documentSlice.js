import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import documentService from './documentService'

const initialState = {
  documents: [],
  document: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Crear nuevo documento
export const createDocument = createAsyncThunk(
  'documents/create',
  async (documentData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await documentService.createDocument(documentData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get documentos de usuarios
export const getDocuments = createAsyncThunk(
  'documents/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await documentService.getDocuments(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
);

// Delete document
export const deleteDocument = createAsyncThunk(
  'documents/delete',
  async (documentId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await documentService.deleteDocument(documentId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
);


export const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDocument.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createDocument.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createDocument.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getDocuments.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getDocuments.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.documents = action.payload
      })
      .addCase(getDocuments.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteDocument.fulfilled, (state, action) => {
        state.isLoading = false
      })
  },
})

export const { reset } = documentSlice.actions;
export default documentSlice.reducer;
