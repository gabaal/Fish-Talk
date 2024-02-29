import Link from "next/link"

export default function Nav() {
  return (
    <div>
            <header className="header">
        <div className="container">
          <h1 className="logo">Fish Talk</h1>
          <nav className="navbar">
            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/posts/new">New Post</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </header>
    </div>
  )
}