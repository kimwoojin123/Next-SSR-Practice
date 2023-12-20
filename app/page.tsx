import Link from 'next/link'
 
export default function Page() {
  return (
    <div>
      <Link href="/dashboard">Dashboard</Link><br />
      <Link href="/about">about</Link>
  </div>
  )
}