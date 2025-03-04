import { Link } from "react-router-dom"
import { MdLocalMovies } from "react-icons/md";
import { MdOutlineMovieFilter } from "react-icons/md";
import { IoTvSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
const Nav = () => {
  return (
    <>
      <nav className="bg-black text-white px-6 md:px-20 xl:px-60 py-3 
      flex justify-between items-center">
        <Link to={"/"}>
        <h3 className="text-xl  md:text-2xl font-bold flex items-center">
        <MdOutlineMovieFilter className="inline mr-3"/>
          MOVIE <span className="text-[#e14646]">ZONE</span>
        </h3>
        </Link>
        <ul className="flex justify-center items-center gap-5">
        <li>
            <Link to={'/searchpage'}><FaSearch size={24}/></Link>
          </li>
          <li>
            <Link to={'/moviepage'}><MdLocalMovies size={24}/></Link>
          </li>
          <li>
            <Link to={'/tvshowpage'}><IoTvSharp  size={24}/></Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
