import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Presently.</h1>
            <div className="links">
                {/* <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link> */
                <><Link to="/signup">Sign Up</Link><Link to="/login">Login</Link></>

                }
            </div>
        </nav>
     );
}
 
export default Navbar;