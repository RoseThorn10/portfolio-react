export default function Navbar() {
    return <nav className="nav">
        <a className="site-title" href="/">Leah Roman</a>
        <ul>
            <li>
                <a href="/about" className="active">About</a>
            </li>
            <li>
                <a href="/projects">My Work</a>
            </li>
            <li>
                <a href="/contact">Contact Me</a>
            </li>
            <li>
                <a href="/resume">Resume</a>
            </li>
        </ul>
    </nav>
}