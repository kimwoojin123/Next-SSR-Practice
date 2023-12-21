export default function Login(){
  return (
    <div className = "flex flex-col items-start">
      <input type="text" name="username" placeholder="아이디"/>
      <input type="text" name="password" placeholder="비밀번호"/>
      <button type="submit">로그인</button>
    </div>
  )
}