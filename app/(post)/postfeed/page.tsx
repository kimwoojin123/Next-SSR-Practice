import { Suspense } from 'react'

export default function Page() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
    </section>
  )
  }


const PostFeed:React.FC = () => {
  return "PostFeed임"
}