import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import TVShow from "./pages/TVShow"
import SearchPage from "./pages/SearchPage"
import Nav from "./components/Nav"
import MovieDetailPage from "./pages/MovieDetailPage"
import TvDetailPage from "./pages/TvDetailPage"
function App() {
  const queryClient = new QueryClient()
 
  return (
    <>
    <QueryClientProvider client={queryClient}>
      
        <Nav/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/moviepage" element={<MoviePage/>}/>
          <Route path="/tvshowpage" element={<TVShow/>}/>
          <Route path="/detailpage/movie/:id" element={<MovieDetailPage/>}/>
          <Route path="/detailpage/tv/:id" element={<TvDetailPage/>}/>
          <Route path="/searchpage" element={<SearchPage/>}/>
        </Routes>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </>
  )
}

export default App
