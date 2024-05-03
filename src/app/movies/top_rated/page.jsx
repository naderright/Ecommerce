 import { getAllMovies } from '@/contextAPI/ContextAPI/MovieContext'
import React from 'react'
import Display from './Display'
import {  pageNumer } from '@/contextAPI/pageNumer';
// import { useSearchParams } from 'next/navigation';

 const TopRatedMovies=async()=> {
  // const page = useSearchParams().get('page'); 
  const pageN= pageNumer();
  const Movies = await getAllMovies('top_rated', !pageN?1:pageN)

  return (
    <div>
      <div className="movies mt-3">
        {/* display movies */}
        <Display Movies={Movies} />

      </div>
    </div>
  )
}

export default TopRatedMovies
