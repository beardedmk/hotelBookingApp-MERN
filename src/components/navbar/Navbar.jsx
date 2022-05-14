import "./navbar.css"

export default function Navbar() {
    return (
        <div>
            <div className="navbar">
                <div className="navbarContainer">
                    <span className="logo">Bookit</span>
                    <div className="naItems">
                        <button className="navButtons">Register</button>
                        <button className="navButtons">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
