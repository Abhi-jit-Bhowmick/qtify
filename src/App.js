import React, { useEffect, useState } from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import Herosection from './Components/HeroSection/Herosection'
import Cardgrid from './Components/Cardgrid/Cardgrid'
import { config } from './Config/Endpoint'
import axios from 'axios'


function App() {
  const [topAlbums, setTopAlbums] = useState([])
  const [newAlbums, setNewAlbums] = useState([])


  const fetchedData = async () => {
    const topAlbumURL = `${config.backendEndpoint}/albums/top`
    const newAlbumURL = `${config.backendEndpoint}/albums/new`

    const TOP_ALBUM_Response = await axios.get(topAlbumURL);
    const TOP_ALBUM_Response_Data = TOP_ALBUM_Response.data;
    setTopAlbums(TOP_ALBUM_Response_Data)

    const NEW_ALBUM_Response = await axios.get(newAlbumURL);
    const NEW_ALBUM_Response_Data = NEW_ALBUM_Response.data;
    setNewAlbums(NEW_ALBUM_Response_Data)

  }

  useEffect(() => {
    fetchedData()
  }, [])



  return (
    <>
      <Navbar />
      <Herosection />
      <Cardgrid
        album_name={"Top Album"}
        cardData={topAlbums}
      />
      <Cardgrid
        album_name={"New Album"}
        cardData={newAlbums}
      />

    </>
  )
}

export default App