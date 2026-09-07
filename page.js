"use client";
import {useState} from "react";
import {supabase} from "../../lib/supabase";
export default function Login(){
 const [email,setEmail]=useState("");const [password,setPassword]=useState("");const [msg,setMsg]=useState("");
 async function login(e){e.preventDefault();if(!supabase)return setMsg("أضف إعدادات Supabase أولًا.");const {error}=await supabase.auth.signInWithPassword({email,password});setMsg(error?"❌ "+error.message:"✅ تم تسجيل الدخول بنجاح");}
 return <main className="center"><div className="form"><h1>🔐 تسجيل الدخول</h1><form onSubmit={login}><input placeholder="البريد الإلكتروني" onChange={e=>setEmail(e.target.value)}/><input type="password" placeholder="كلمة المرور" onChange={e=>setPassword(e.target.value)}/><button>دخول</button></form><p>{msg}</p><a href="/">← العودة للموقع</a></div></main>
}