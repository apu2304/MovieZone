
import useData from "../hooks/useData"

import Landing from "../components/Landing";
import Corosel from "../components/Corosel";

const MoviePage = () => {
  const key = '87c105fb0fc0466e60fee9eb05e9ee66';

  const [movieDataQuery, ActionMQuery, RomanceMQuery, MysteryMQuery, HorrorMQuery] = useData([
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
  `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
  `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=9648`,
  `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`
  ]);
  
  const { data: movieData, isLoading: isMovieLoading, isError: isMovieError, error: movieError } = movieDataQuery;
  const { data: actionMQueryData, isLoading: isActionMQueryLoading, isError: isActionMQueryError, error: actionMQueryError } = ActionMQuery;
  const { data: romanceMQueryData, isLoading: isRomanceMQueryLoading, isError: isRomanceMQueryError, error: romanceMQueryError } = RomanceMQuery;
  const { data: mysteryMQueryData, isLoading:  isMysteryMQueryLoading, isError: isMysteryMQueryError, error: mysteryMQueryError } = MysteryMQuery;
  const { data: HorrorMQueryData, isLoading:  isHorrorMQueryLoading, isError: isHorrorMQueryError, error: HorrorMQueryError } = HorrorMQuery;

  if (isMovieLoading || isActionMQueryLoading  || isRomanceMQueryLoading ||
    isMysteryMQueryLoading || isHorrorMQueryLoading
  ) {
    return <div>Loading...</div>;
  }
  if (isMovieError || isActionMQueryError || isRomanceMQueryError ||
    isMysteryMQueryError || isHorrorMQueryError
  ) {
    return <div>{movieError?.message || actionMQueryError?.message 
      || romanceMQueryError?.message || mysteryMQueryError?.message ||
      HorrorMQueryError?.message}</div>;
  }
  // const kdramaWithMediaType = kdramaData?.data.results.map((kdrama: any) => ({
  //     ...kdrama,
  //     media_type: 'tv'
  // }));
  return (
    <div className="flex flex-col justify-center items-center">
            <div>
                <Landing data={movieData?.data.results[5]}/>
            </div>
            <div className="w-3/4 m-auto">
                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-5 
                    border-b-2 border-[#e96464] rounded">Trending Movies</h2>
                    <Corosel data={movieData?.data.results}/>
                </div>
            </div>
            <div className="w-3/4 m-auto">
                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-5 
                    border-b-2 border-[#e96464] rounded">Action Movies</h2>
                    <Corosel data={actionMQueryData?.data.results}/>
                </div>
            </div>
            <div className="w-3/4 m-auto">
                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-5 
                    border-b-2 border-[#e96464] rounded">Romance Movies</h2>
                    <Corosel data={
                        romanceMQueryData?.data.results
                    }/>
                </div>
            </div>
            <div className="w-3/4 m-auto">
                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-5 
                    border-b-2 border-[#e96464] rounded">Mystery Movies</h2>
                    <Corosel data={
                        mysteryMQueryData?.data.results
                    }/>
                </div>
            </div>
            <div className="w-3/4 m-auto">
                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-5 
                    border-b-2 border-[#e96464] rounded">Horror Movies</h2>
                    <Corosel data={
                        HorrorMQueryData?.data.results
                    }/>
                </div>
            </div>

        </div>
  )
}

export default MoviePage
