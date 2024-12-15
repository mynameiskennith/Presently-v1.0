import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/">
                <h1>Presently.</h1>
            </Link>
            <div className="links">
                {/* <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link> */
                // <><Link to="/signup">Sign Up</Link><Link to="/login">Login</Link></>
                <><Link to="/generate">Generate PPT</Link><Link to="/rating">Rate PPT</Link></>

                }
            </div>
        </nav>
     );
}
 
export default Navbar;