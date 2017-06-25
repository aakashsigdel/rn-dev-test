const initialState = {
  isLoading: false,
  error: null,
  jobs: []
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
  }

  return state;
}

export default jobs;
