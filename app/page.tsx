import Link from 'next/link'
 
export default function Page() {
  return (
    <div>
      <Link href="/login">Login</Link><br />
      <Link href="/signup">SignUp</Link>
    </div>
  )
}

