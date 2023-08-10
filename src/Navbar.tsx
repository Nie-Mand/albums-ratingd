import { Link } from "wouter";

export default function Navbar() {
    return (
        <div className="c flex justify-center">
            <nav className="grid grid-cols-3">
            <Link href="/"><a className="b">Albums</a></Link>
            <Link href="/artists"><a className="b">Artists</a></Link>
            <Link href="/singles"><a className="b">Singles</a></Link>
            </nav>
        </div>
    )
}