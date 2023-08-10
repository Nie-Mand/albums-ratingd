import { Link } from "wouter";

export default function Navbar() {
    return (
      <div className="c flex justify-center">
        <nav className="py-4">
          <Link href="/">
            <a className="b">Albums</a>
          </Link>
          <Link href="/artists">
            <a className="b">Artists</a>
          </Link>
          <Link href="/eps">
            <a className="b">EPs</a>
          </Link>
          <Link href="/singles">
            <a className="b">Singles</a>
          </Link>
        </nav>
      </div>
    );
}