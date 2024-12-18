import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar bg-black p-4 flex items-center max-w-full mx-auto border-b border-white font-Quicksand">
            <Link to="/">
                <h1 className="text-white text-3xl font-extrabold">Presently.</h1>
            </Link>
            <div className="links ml-auto text-xl font-bold text-white">
                <Link 
                    to="/generate" 
                    className="ml-4 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-2 px-4">
                    Generate PPT
                </Link>
                <Link 
                    to="/rating" 
                    className="ml-4 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-2 px-4">
                    Rate PPT
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
