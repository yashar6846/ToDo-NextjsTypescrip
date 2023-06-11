import {NextResponse } from "next/server";
import {getDatabase,ref,set} from "firebase/database"
import { initializeApp } from "firebase/app";

const fierbaseConfig = {
    databaseURL: "https://todo-list-96653-default-rtdb.firebaseio.com/"
}

export async function GET(request:Request){
    const app = initializeApp(fierbaseConfig)
    const database= getDatabase(app)
      console.log(database)
    set(ref(database, "users/" + 1),{
      username: "yashar",
      gmail: "yasharnajafi6846@gmail.com",
      profile_name: "yashar",
    })
    return NextResponse.json({hello: "world"})
}
export async function POST(request:Request){
    return NextResponse.json({hello: "post"})
}