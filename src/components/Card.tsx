// import { MdPhotoAlbum } from "react-icons/md";

const Card = ({data}: {data: any}) => {
  return (
    <div className="w-28 md:w-36 h-56 shadow-sm">
    <figure className="relative">
      <img
        src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
        alt="movie" className="rounded-xl"/>
        {/* <MdPhotoAlbum className="absolute rounded-sm
        text-white top-2 right-2 bg-slate-950" size={20}/> */}
    </figure>
    <div className="">
      <h2 className=" text-sm md:text-xl font-medium">
        {data?.title}
      </h2>
    </div>
  </div>
  )
}

export default Card
