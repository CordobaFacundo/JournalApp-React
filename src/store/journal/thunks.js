import { collection, doc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";

export const startNewNote = () => {
    return async( dispatch, getState ) => {

        dispatch( savingNewNote() );

        const { uid } = getState().auth; //getState() agarra todo el store

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection(FirebaseDB, `${uid}/journal/notes`) );
        await setDoc( newDoc, newNote );
        
        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote(newNote) );
        dispatch( setActiveNote(newNote) );
    }
}
