export default function SignUp(){
  return (
    <div className = "flex flex-col items-start">
      <input type="text" name="name" placeholder="이름"/>
      <input type="text" name="username" placeholder="아이디"/>
      <input type="text" name="password" placeholder="비밀번호"/>
      <button type="submit">회원가입</button>
    </div>
  )
}