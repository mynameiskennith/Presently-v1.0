import { Link } from 'react-router-dom';

const Navbar = ({ isHero }) => {
  return (
    <nav className="navbar p-4 flex items-center max-w-full mx-auto border-b border-white font-Quicksand">
      <Link to="/">
        <h1 className="text-white text-3xl font-extrabold">Presently.</h1>
      </Link>
      <div className="links ml-auto text-xl font-bold text-white">
        {isHero ? (
          // Links to "Generate PPT" and "Rate PPT"
          <>
            <Link
              to="/generate"
              className="ml-4 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-2 px-4"
            >
              Generate PPT
            </Link>
            <Link
              to="/rating"
              className="ml-4 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-2 px-4"
            >
              Rate PPT
            </Link>
            <Link
              to="/training"
              className="ml-4 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-2 px-4"
            >
              Train PPT
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/signup"
              className="ml-4 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-2 px-4"
            >
              SignUp
            </Link>
            <Link
              to="/login"
              className="ml-4 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-2 px-4"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
