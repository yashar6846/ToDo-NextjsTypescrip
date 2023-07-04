
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
  databaseURL: "https://nexttypescript-default-rtdb.firebaseio.com",
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

