import React, {useState } from "react"
import useSearch from "../hooks/useSearch"
import Card from "../components/Card"
import { Link } from "react-router-dom"
const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [query, setQuery] = useState('');
  const {data, isLoading, isError, error} = useSearch(query)
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setQuery(searchTerm);
  }
  const filteredResults = data?.data.results.filter((result: any) => result.media_type === 'movie' || result.media_type === 'tv');
  return (
    <div>
      <form onSubmit={handleSubmit}  
      className="flex justify-center items-center">
      <input type="text"  placeholder="Search Here..."
      className="w-[25rem] mx-2 rounded-full px-6 py-3 text-black"
      value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
      />
      </form>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
     <div className="flex justify-center items-center m-3">
     {filteredResults && query && (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 ">
          {filteredResults.map((result: any) => (
            <div className="" key={result.id}>
            <Link to={`/detailpage/${result.media_type}/${result.id}`}><Card data={result} /></Link>
        </div>
          ))}
        </div>
      )}
     </div>
    </div>
  )
}

export default SearchPage
