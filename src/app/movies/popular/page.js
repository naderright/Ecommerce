import { getAllMovies } from '@/contextAPI/ContextAPI/MovieContext'
import React, { Suspense } from 'react'
import Display from './Display';
import { pageNumer } from '@/contextAPI/pageNumer';

const PopularMovies = async () => {
  const pageN = pageNumer();
  const movies = await getAllMovies('popular', !pageN ? 1 : pageN);

  return (
    <div>
      <div className="movies mt-3">
        <Suspense>
          <Display movies={movies} />
        </Suspense>

      </div>
    </div>
  )
}

export default PopularMovies
