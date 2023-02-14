const initialState = {
    currentUser: null,
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                currentUser: action.currentUser
            }
        default:
            return initialState
    }

}