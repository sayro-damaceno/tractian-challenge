import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import api from '../../services/api'

export const getCompanies = createAsyncThunk(
  'companies/getCompanies',
  async () => {
    try {
      const { data } = await api.get('/companies')
      return data
    } catch (error) {
      console.error(error)
    }
  }
)

const companiesAdapter = createEntityAdapter({})

export const companiesSlice = createSlice({
  name: 'companies',
  initialState: companiesAdapter.getInitialState({}),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompanies.fulfilled, (state, { payload }) => {
      companiesAdapter.setAll(state, payload)
    })
  },
})

export default companiesSlice.reducer
