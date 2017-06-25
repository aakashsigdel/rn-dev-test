const initialState = {
  isLoading: false,
  error: null,
  jobs: [],
  lastPage: false
}
const jobs = (state = initialState, action) => {
  switch(action.type) {
    case 'REQUEST_JOBS':
      return {
        ...state,
        isLoading: true
      }
    case 'RECEIVE_JOBS':
      return {
        ...state,
        isLoading: false,
        jobs: [...state.jobs, ...action.jobs]
      }
    case 'ERROR_JOBS':
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case 'CLEAR_JOBS':
      return {
        ...state,
        jobs: [],
        isLoading: false
      }
    case 'SET_LAST_PAGE':
      return {
        ...state,
        lastPage: true
      }
  }

  return state;
}

export default jobs;
