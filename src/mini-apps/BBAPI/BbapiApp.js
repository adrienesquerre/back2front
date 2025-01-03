import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Headerbb from './ui/Headerbb';
import CharacterGrid from './characters/CharacterGrid';
import Search from './ui/Search';
import './BbapiApp.css';

const BBapiApp = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        // Fetch data from the local JSON file
        const result = await axios('/back2front/data/characters.json'); // Adjusted path for GitHub Pages
        
        // Filter items based on the search query
        const filteredItems = result.data.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );

        setItems(filteredItems);
      } catch (error) {
        console.error('Error fetching characters:', error);
        setItems([]); // Fallback to an empty array on error
      }
      setIsLoading(false);
    };

    fetchItems();
  }, [query]); // Re-fetch items when the query changes

  return (
    <>
      <video id="background-video" loop autoPlay muted>
        <source
          src={require('../../videos/video-compressed.mp4').default}
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
};

export default BBapiApp;
