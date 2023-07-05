
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
  update
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
  return NextResponse.json(todo.val());
 
}

export async function POST(request: Request) {
  const body = await request.json();
  const newItemRef = push(refTodo);
  set(newItemRef, body).then(() => console.log("Done:", newItemRef.key));
  return NextResponse.json({ ...body, key: newItemRef.key });
}

export async function PUT(request: Request) {
  const {id, ...rest} = await request.json();
  console.log("rest", rest);
  console.log("id", id);
  const updates: any ={}
  updates["user/1001/todo/" + id] = rest
  update(ref(db), updates)
  return NextResponse.json("");
}
