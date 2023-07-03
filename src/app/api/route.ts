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
// export async function POST(request: Request){
//   const body = await request.json()
//   const newItemRef = push(ref)
//   set(newItemRef, body).then(()=>console.log("Done",newItemRef.key))
//     return NextResponse.json({...body, key: newItemRef.key})
// }

//FierBase
import { NextResponse } from "next/server";
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  onValue,
  push,
  onChildAdded,
  onChildChanged,
} from "firebase/database";
import firebase, { initializeApp } from "firebase/app";

const firebaseConfig = {
  databaseURL: "https://im-donkey-default-rtdb.firebaseio.com/",
};



const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const refTodo = ref(db, "user/1001/todo");



export async function GET(request: Request) {
  const todo = await get(child(ref(db), "user/1001/todo"));
  console.log("🚀 ~ file: route.ts:70 ~ GET ~ todo:", todo.val());
  return NextResponse.json(todo.val());
 
}

export async function POST(request: Request) {
  const body = await request.json();
  const newItemRef = push(refTodo);
  set(newItemRef, body).then(() => console.log("Done:", newItemRef.key));
  return NextResponse.json({ ...body, key: newItemRef.key });
}