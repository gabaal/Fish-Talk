import Link from "next/link"

export default function Nav() {
  return (
    <div className="navbar-container">
      <header className="header">
        <div className="navContainer">
          <h1 className="logo">Fish Talk</h1>
          <nav className="navbar">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/posts" className="nav-link">Posts</Link>
            <Link href="/posts/addPost" className="nav-link">New Post</Link>
            <Link href="/categories" className="nav-link">Categories</Link>
            <Link href="/categories/addcategory" className="nav-link">New Category</Link>
            <Link href="/about" className="nav-link">About</Link>
          </nav>
        </div>
      </header>
    </div>
  )
}