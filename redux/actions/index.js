import { auth, db } from "../../firebase"

export function fetchUser() {
    return ((dispatch) => {
        db.collection('users')
            .doc(auth.currentUser.uid)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    console.log(doc.data())
                    dispatch({ type: 'SET_USER', currentUser: doc.data() })
                }
                else {
                    console.log("user does not exist")
                }
            })
    })
}