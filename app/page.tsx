import Link from 'next/link'
 
export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-lvh">
      <Link className="text-5xl mb-20" href="/login">Login</Link>
      <Link className="text-5xl" href="/signup">SignUp</Link>
    </div>
  )
}

