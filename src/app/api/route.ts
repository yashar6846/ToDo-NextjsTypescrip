// import {NextResponse } from "next/server";
// import {getDatabase,ref,set} from "firebase/database"
// import { initializeApp } from "firebase/app";

// const fierbaseConfig = {
//     databaseURL: "https://todo-list-96653-default-rtdb.firebaseio.com/"
// }

// export async function GET(request:Request){
//     const app = initializeApp(fierbaseConfig)
//     const database= getDatabase(app)
//     set(ref(database, "users/" + 1),{
//       username: "yashar",
//       gmail: "yasharnajafi6846@gmail.com",
//       profile_name: "yashar",
//     })
//     return NextResponse.json({hello: "world"})
// }
// export async function POST(request:Request){
//     return NextResponse.json({hello: "post"})
// }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase,ref,set} from "firebase/database"
import {NextResponse } from "next/server";

const firebaseConfig = {
  apiKey: "AIzaSyC_diBKBrhyhJBOQbXE5ZAc0Q_khAU4gPI",
  authDomain: "todo-list-96653.firebaseapp.com",
  databaseURL: "https://todo-list-96653-default-rtdb.firebaseio.com",
  projectId: "todo-list-96653",
  storageBucket: "todo-list-96653.appspot.com",
  messagingSenderId: "686517612282",
  appId: "1:686517612282:web:f44b87b7997d1af79d2343"
};
export async function GET(request:Request){
    // const app = initializeApp(fierbaseConfig)
    const database= getDatabase(app)
    set(ref(database, "users/" + 1),{
      username: "yashar",
      gmail: "yasharnajafi6846@gmail.com",
      profile_name: "yashar",
    })
    return NextResponse.json({hello: "world"})
}
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);