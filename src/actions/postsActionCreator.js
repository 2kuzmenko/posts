const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/';

const postsActionCreator = {
    loadData: () => (dispatch, getState) => {
        dispatch({
            type: 'POST_REQ'
        })
        fetch(BASE_URL)
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: 'POST_SUCCESS',
                    data: res
                })
            })
            .catch(error => {
                dispatch({
                    type: 'POST_ERROR',
                    data: error
                })
            }) 
    }
}

export default postsActionCreator;