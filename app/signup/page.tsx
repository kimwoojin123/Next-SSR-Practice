'use client'

import React, {useState} from "react";
import Link from 'next/link'


export default function SignUp(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleJoin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, username, password }),
      });
      
      if (response.ok) {
        setMessage("회원가입이 완료되었습니다."); // 성공 메시지 설정
      } else {
        setMessage("회원가입에 실패했습니다."); // 실패 메시지 설정
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("회원가입 중 오류가 발생했습니다."); // 오류 메시지 설정
    }
  };


  return (
    <div>
      <h1>회원가입</h1>
      <form className = "flex flex-col items-start" onSubmit={handleJoin}>
        <input type="text" value={name} placeholder="이름" onChange={(e) => setName(e.target.value)} />
        <input type="text" value={username} placeholder="아이디" onChange={(e) => setUsername(e.target.value)} />
        <input type="text" value={password} placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">회원가입</button>
      </form>
      {message && <p>{message}</p>}
      <Link href="/login">로그인페이지로</Link>
    </div>
  )
}