import { useParams } from "react-router-dom";
import useDetails from "../hooks/useDetails"

const TvDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    if (!id) {
      return <div>Invalid parameters</div>;
    }
  
    const { data, isError, isLoading, error } = useDetails('tv', id);
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;
  return (
    <div className="flex flex-col justify-center items-center gap-3">
    <img src={`https://image.tmdb.org/t/p/w500${data?.data.poster_path}`}
      className="w-[25rem] " alt="" />

    <h2 className="text-5xl font-semibold">{data?.data.title}</h2>
    <p className="text-lg font-light text-center">{data?.data.tagline}</p>
    <div className="px-4">
      <h3 className="text-lg font-medium mb-3">Overview</h3>
      <p className="text-normal font-light max-w-[40rem]">{data?.data.overview}</p>
    </div>
    <h3 className="text-lg font-medium px-3">Movie HomePage:
      <a href={data?.data.homepage} target="_blank" className="text-blue-500 block md:inline ml-4">{data?.data.homepage}</a>
    </h3>
    <div className="px-4 text-center">
      <h3 className="text-lg font-medium mb-3">Genres</h3>
      <p className="text-2xl font-medium text-[#e96464]">{data?.data.genres.map((genre: any) => (
        <span className="px-4"
        key={genre.id}>{genre.name}</span>
      ))}</p>
    </div>
    <div className="overflow-x-auto p-5">
      <h3 className="text-xl font-bold mb-6">Details</h3>
      <table className="text-center hidden md:block bg-white text-black px-3 rounded-lg">
        {/* head */}
        <thead >
          <tr >
            <th className="px-5 border-b-2 py-2">Popularity</th>
            <th className="px-5 border-b-2 py-2">Number of episodes</th>
            <th className="px-5 border-b-2 py-2">Number of Season</th>
            <th className="px-5 border-b-2 py-2">First Air Date</th>
            <th className="px-5 border-b-2 py-2">Last Air Date</th>
            <th className="px-5 border-b-2 py-2">Vote average</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td className="py-1">{data?.data.popularity}</td>
            <td className="py-1">{data?.data.number_of_episodes}</td>
            <td className="py-1">{data?.data.number_of_seasons}</td>
            <td className="py-1">{data?.data.first_air_date}</td>
            <td className="py-1">{data?.data.last_air_date}</td>
            <td className="py-1">{data?.data.vote_average}</td>
          </tr>
        </tbody>
      </table>
      <table className="text-center block md:hidden mb-5
      bg-white text-black px-3 rounded-lg">
        {/* head */}
        <thead >
          <tr >
            <th className="px-3 border-b-2 py-2">Popularity</th>
            <th className="px-3 border-b-2 py-2">Number of episodes</th>
            <th className="px-3 border-b-2 py-2">Number of Season</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td className="py-1">{data?.data.popularity}</td>
            <td className="py-1">{data?.data.number_of_episodes} min</td>
            <td className="py-1">{data?.data.number_of_seasons}</td>
          </tr>
        </tbody>
      </table>
      <table className="text-center block md:hidden
      bg-white text-black px-3 rounded-lg">
        {/* head */}
        <thead >
          <tr >
            <th className="px-3 border-b-2 py-2">First Air Date</th>
            <th className="px-3 border-b-2 py-2">Last Air Date</th>
            <th className="px-3 border-b-2 py-2">Vote average</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td className="py-1">{data?.data.first_air_date}</td>
            <td className="py-1">{data?.data.last_air_date}</td>
            <td className="py-1">{data?.data.vote_average}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 className="text-lg font-medium mb-3 ">NetWorks</h3>
    <p className="grid items-center px-3 text-center gap-7 pb-4">
      {data?.data.networks.map((company: any) => (
        <div className="flex flex-col items-center">
          <img src={`https://image.tmdb.org/t/p/w500${company.logo_path}`} alt=""
            className="bg-white w-20 p-2 rounded-md" />
          <p className="text-lg font-bold">{company.name}</p>
          <p><span>Country: </span>{company.origin_country}</p>
        </div>
      ))}
    </p>
    <h3 className="text-lg font-medium mb-3 ">Production Company</h3>
    <p className="grid grid-cols-1 md:grid-cols-3 items-center px-3 text-center gap-7 pb-4">
      {data?.data.production_companies.map((company: any) => (
        <div className="flex flex-col items-center">
          <img src={`https://image.tmdb.org/t/p/w500${company.logo_path}`} alt=""
            className="bg-white w-20 p-2 rounded-md" />
          <p className="text-lg font-bold">{company.name}</p>
          <p><span>Country: </span>{company.origin_country}</p>
        </div>
      ))}
    </p>
    

    
  </div>
  )
}

export default TvDetailPage
