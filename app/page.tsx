import Link from 'next/link'
 
export default function Page() {
  return (
    <div>
      <Link className = "text-4xl" href="/d ashboard">Dashboard</Link><br />
      <Link href="/about">about</Link><br />
      <Link href="/postfeed">PostFeed</Link>
  </div>
  )
}

