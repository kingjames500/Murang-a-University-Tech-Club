
import './Header.css';
function HeaderNavbar(){
    return (
        <div className="navbar">
            <h2 className="logo">MUTC</h2>
            <nav>
                <ol className="navigation-list">
                    <li className="navigation-list-items">
                        <a className="links" href="#">events
                        </a>
                    </li>
                    <li className="navigation-list-items">
                        <a className="links" href="#">Home
                        </a>
                    </li>
                    <li className="navigation-list-items">
                        <a className="links" href="#">leadership
                        </a>
                    </li>
                    <li className="navigation-list-items">
                        <a className="links" href="#">track pages
                        </a>
                    </li>
                    <li className="navigation-list-items">
                        <a className="links" href="#">events
                        </a>
                    </li>
                </ol>
            </nav>
        </div>
    )
}


function Header() {
    return (
        <header>
            <HeaderNavbar/>
        </header>
    )
    
}
export default Header;