
import './Header.css';
function HeaderNav(){
    return (
        <div className="navbar">
            <h2 className="logo">MUTC</h2>
            <nav>
                <ol className="navigation-list">
                    <li className="navigation-list-items">
                        <a className="links" href="#">Home
                        </a>
                    </li>
                    <li className="navigation-list-items">
                        <a className="links" href="#">leadership
                        </a>
                    </li>
                    <li className="navigation-list-items">
                        <a className="links" href="#">tracks
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
            <HeaderNav/>
        </header>
    )
    
}
export default Header;