import MovieCard from '@/Commponnent/MovieCard'
// import { getAllTV } from '@/contextAPI/ContextAPI/TvContext'
import Link from 'next/link'
import React from 'react'

async function Display({Movies}) {
  // const Movies = await getAllTV('on_the_air', !page?1:page)

    // console.log(movies);
  return (
    <div>
      <div className="displayMovies grid grid-cols-2 md:grid-cols-4 gap-4">
        {Movies.map((movie,key)=><Link key={key} href={`/details/movie/${movie.id}`}><MovieCard movie={movie}/></Link>)}
      </div>
    </div>
  )
}

export default Display
