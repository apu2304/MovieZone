import useData from "../hooks/useData"
import Landing from "../components/Landing";
import Corosel from "../components/Corosel";
const TVShow = () => {

  const key = '87c105fb0fc0466e60fee9eb05e9ee66';

  const [tvShowDataQuery, kdramaDataQuery, TvShowActionQuery, 
     TvShowRomanceQuery, TvShowMysteryQuery,
     TvShowAdventureQuery
     ] = useData([
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`,
    `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_original_language=ko`,
    `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=10759`,
    `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=10749`,
    `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=9648`,
    `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=10759`
  ]);

  const { data: tvShowData, isLoading: isTvShowLoading, isError: isTvShowError, error: tvShowError } = tvShowDataQuery;
  const { data: kdramaData, isLoading: isKdramaLoading, isError: isKdramaError, error: kdramaError } = kdramaDataQuery;
  const { data: tvShowActionData, isLoading: isTvShowActionLoading, isError: isTvShowActionError, error: tvShowActionError } = TvShowActionQuery;
  const { data: tvShowRomanceData, isLoading: isTvShowRomanceLoading, isError: isTvShowRomanceError, error: tvShowRomanceError } = TvShowRomanceQuery;
  const { data: tvShowMysteryData, isLoading: isTvShowMysteryLoading, isError: isTvShowMysteryError, error: tvShowMysteryError } = TvShowMysteryQuery;
  //const { data: tvShowHorrorData, isLoading: isTvShowHorrorLoading, isError: isTvShowHorrorError, error: tvShowHorrorError } = TvShowHorrorQuery;
  const { data: tvShowAdventureData, isLoading: isTvShowAdventureLoading, isError: isTvShowAdventureError, error: tvShowAdventureError } = TvShowAdventureQuery;


  if (isTvShowLoading || isKdramaLoading || isTvShowActionLoading ||
    isTvShowRomanceLoading || isTvShowMysteryLoading  || 
    isTvShowAdventureLoading

  ) {
    return <div>Loading...</div>;
  }
  if (isTvShowError || isKdramaError || isTvShowActionError ||
    isTvShowRomanceError || isTvShowMysteryError  ||
    isTvShowAdventureError
  ) {
    return <div>{tvShowError?.message || kdramaError?.message ||
      tvShowActionError?.message || tvShowRomanceError?.message ||
      tvShowMysteryError?.message ||
      tvShowAdventureError?.message}</div>;
  }
  const kdramaWithMediaType = kdramaData?.data.results.map((kdrama: any) => ({
    ...kdrama,
    media_type: 'tv'
  }));
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Landing data={tvShowData?.data.results[5]} />
      </div>
      <div className="w-3/4 m-auto">
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-5 
                    border-b-2 border-[#e96464] rounded">Trending TV Series</h2>
          <Corosel data={tvShowData?.data.results} />
        </div>
      </div>
      <div className="w-3/4 m-auto">
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-5 
                    border-b-2 border-[#e96464] rounded">Trending K-Drama</h2>
          <Corosel data={
            kdramaWithMediaType
          } />
        </div>
      </div>
      <div className="w-3/4 m-auto">
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-5 
                    border-b-2 border-[#e96464] rounded">Action TV Series</h2>
          <Corosel data={tvShowActionData?.data.results} />
        </div>
      </div>
      <div className="w-3/4 m-auto">
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-5 
                    border-b-2 border-[#e96464] rounded">Romance TV Series</h2>
          <Corosel data={tvShowRomanceData?.data.results} />
        </div>
      </div>
      <div className="w-3/4 m-auto">
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-5 
                    border-b-2 border-[#e96464] rounded">Mystery TV Series</h2>
          <Corosel data={tvShowMysteryData?.data.results} />
        </div>
      </div>
      {/* <div className="w-3/4 m-auto">
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-5 
                    border-b-2 border-[#e96464] rounded">Mystery TV Series</h2>
          <Corosel data={tvShowHorrorData?.data.results} />
        </div>
      </div> */}
      <div className="w-3/4 m-auto">
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-5 
                    border-b-2 border-[#e96464] rounded">Adventure TV Series</h2>
          <Corosel data={tvShowAdventureData?.data.results} />
        </div>
      </div>
    </div>
  )
}

export default TVShow
