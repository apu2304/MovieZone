
const Landing = ({data}: {data: any}) => {
  return (
    <div className="w-screen h-64">
      <img src={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`} 
      className="w-full h-full object-cover" alt="" />
    </div>
  )
}

export default Landing
