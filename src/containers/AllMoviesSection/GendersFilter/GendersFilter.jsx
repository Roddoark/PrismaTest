import React from 'react'

import Select from '../../../components/Select/Select'

export default function GendersFilter() {
  return (
    <>
      <Select 
          id="gender"
          genres={genres}
          defaultOption="Genre"
          value={genreSelected}
          setValue={setGenreSelected}
          selected={true}
          disabled={true}
      />
    </>
  )
}
