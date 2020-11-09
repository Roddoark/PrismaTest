import React from 'react'
import GendersFilter from './GendersFilter/GendersFilter'
import SortByFilter from './SortByFilter/SortByFilter'

export default function AllMoviesSection() {
  return (
    <div>
      <SortByFilter />
      <GendersFilter />
    </div>
  )
}
