import { collection, doc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";

export const startNewNote = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth; //getState() agarra todo el store

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection(FirebaseDB, `${uid}/journal/notes`) );
        await setDoc( newDoc, newNote );
        
    
    }
}
