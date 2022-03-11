import React, {createContext, useState} from "react";
import app, { db } from "../services/FirebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

//const firebase = require("firebase");
require("firebase/firestore");
import {getFirestore, addDoc, collection, setDoc, doc, connectFirestoreEmulator, } from "firebase/firestore"






export const AuthContext = createContext({})

function AuthProvider({children}){

    const [user, setUser] = useState(null)
    const auth = getAuth()

    
    async function signUp (email, Password, name){
        await createUserWithEmailAndPassword(auth, email, Password).
        then(async (userCredential)=>{
            let uid = userCredential.user.uid

           await setDoc (doc (db, "users", uid), {
                name: name,
                email: email,
                saldo:0
            }).then((data)=>console.log ("Registered in database \n" + console.log("Dados: " + data))).catch((error)=>console.error("Note Registered. Some error ocurred: " + error))

            // await addDoc (collection(db, "users"), {
            //     name: name,
            //     email: email,
            //     saldo:0
            // })

            

            let data = {
                uid:uid,
                name:name,
                email:email
            }

            setUser(data)
            
            
            
        }).catch((error)=>console.error("Some error ocurred: " + error))
        
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, signUp}}>
            {children}

        </AuthContext.Provider>

    )
}

export default AuthProvider