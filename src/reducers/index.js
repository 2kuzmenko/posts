const initialState = {
  loading: false,
  loaded: false,
  error: '',
  data: []
};

const posts = (state = initialState, action)=> {
  switch(action.type) {
    case 'POST_REQ': 
      return {
        ...state,
        loading: true
      }
    

    case 'POST_SUCCESS': 
      return {
        ...state,
        loaded: true,
        data: action.data
      
      }
    
    case 'POST_ERROR':
      return {
        ...state,
        loaded : false,
        error: action.error
      }

    default:
      return state;

  }
};

export default posts;
