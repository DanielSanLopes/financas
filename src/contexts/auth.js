import React, {createContext, useState, useEffect} from "react";
import app, { db } from "../services/FirebaseConfig";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

//const firebase = require("firebase");
require("firebase/firestore");
import {getFirestore, addDoc, collection, setDoc, doc, connectFirestoreEmulator, getDoc, } from "firebase/firestore"
import { async } from "@firebase/util";

import AsyncStorage from "@react-native-async-storage/async-storage";








export const AuthContext = createContext({})

function AuthProvider({children}){

    const [user, setUser] = useState(null)
    const auth = getAuth()


    //Is Signed In

   

    //SignIn user
    async function signIn(email, password){

        await signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential)=>{
            //console.log(userCredential)

            let uid = userCredential.user.uid

            await getDoc(doc(db, "users", uid)).then(async (response)=>{
                
                let data = {
                    uid:uid,
                    name:response.data().name,
                    email:response.data().email,
                    saldo: response.data().saldo
                }
                
                setUser(data)
                StorageUser(data)
                
                
            }).catch((error)=>"Some error ocurred: " + error)
        })
        .catch((error)=>console.error("Login error: " + error))

    }
    
    //Create user and cadaster
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
                email:email,
                saldo: 0
            }

            setUser(data)
            StorageUser(data)

            
            
            
            
        }).catch((error)=>console.error("Some error ocurred: " + error))
        
    }

    async function StorageUser(data){
        await AsyncStorage.setItem("auth_user", JSON.stringify(data))

    }

    useEffect(()=>{
        async function LoadStorage(){
            const storagedUser = await AsyncStorage.getItem("auth_user")

            if (storagedUser){
                setUser(JSON.parse(storagedUser))
            }
        }

        LoadStorage()

    },[])

    return(
        <AuthContext.Provider value={{signed: !!user, user, signUp, signIn, }}>
            {children}

        </AuthContext.Provider>

    )
}

export default AuthProvider