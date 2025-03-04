
import useData from "../hooks/useData"

import Landing from "../components/Landing";
import Corosel from "../components/Corosel";
const HomePage = () => {
    const key = '87c105fb0fc0466e60fee9eb05e9ee66';

    const [movieDataQuery, tvShowDataQuery, kdramaDataQuery] = useData([
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`,
    `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_original_language=ko`,
    ]);
    
    const { data: movieData, isLoading: isMovieLoading, isError: isMovieError, error: movieError } = movieDataQuery;
    const { data: tvShowData, isLoading: isTvShowLoading, isError: isTvShowError, error: tvShowError } = tvShowDataQuery;
    const { data: kdramaData, isLoading: isKdramaLoading, isError: isKdramaError, error: kdramaError } = kdramaDataQuery;
  
    if (isMovieLoading || isTvShowLoading  || isKdramaLoading) {
      return <div>Loading...</div>;
    }
    if (isMovieError || isTvShowError || isKdramaError) {
      return <div>{movieError?.message || tvShowError?.message || kdramaError?.message}</div>;
    }
    const kdramaWithMediaType = kdramaData?.data.results.map((kdrama: any) => ({
        ...kdrama,
        media_type: 'tv'
    }));
    
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
                    border-b-2 border-[#e96464] rounded">Trending TV Series</h2>
                    <Corosel data={tvShowData?.data.results}/>
                </div>
            </div>
            <div className="w-3/4 m-auto">
                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-5 
                    border-b-2 border-[#e96464] rounded">Trending K-Drama</h2>
                    <Corosel data={
                        kdramaWithMediaType
                    }/>
                </div>
            </div>

        </div>
    )
}

export default HomePage
