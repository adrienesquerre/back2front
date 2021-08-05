import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Headerbb from './ui/Headerbb'
import CharacterGrid from './characters/CharacterGrid'
import Search from './ui/Search'
import './BbapiApp.css'

const BBapiApp = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <>
      <video id="background-video" loop autoPlay>
        <source
          src={require("../../videos/video-compressed.mp4").default}
          type="video/mp4"
        />
      </video>
      <div className="container">
        <Headerbb />
        <Search getQuery={(q) => setQuery(q)} />
        <CharacterGrid isLoading={isLoading} items={items} />
      </div>
    </>
  );
}

export default BBapiApp