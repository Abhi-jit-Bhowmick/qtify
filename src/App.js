import React, { useEffect, useState } from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import Herosection from './Components/HeroSection/Herosection'
import Cardgrid from './Components/Cardgrid/Cardgrid'
import { config } from './Config/Endpoint'
import axios from 'axios'
import FilterSection from './Components/FilterSection/FilterSection'
import Faq from './Components/Faqs/Faq'


function App() {
  const [topAlbums, setTopAlbums] = useState([])
  const [newAlbums, setNewAlbums] = useState([])
  const [songs, setSongs] = useState([])
  const [filteredSong, setFilteredSong] = useState([])
  // const [allSongs, setAllSongs] = useState([])
  // const [filteredSong, setFilteredSong] = useState(allSongs)
  // const [genre, setGenre] = useState("all")


  // const handlebtnClick = (e) => {
  //   const song_genre = e.target.value;
  //   setGenre(song_genre)
  //   if (genre === "all") {
  //     setFilteredSong(allSongs)
  //   } else {

  //     const genreSongs = allSongs.filter((item) => {
  //       return item.genre.key === song_genre
  //     });
  //     setFilteredSong(genreSongs)
  //   }
  // }


  const filterSongsByGenresFunction = (genres) => {
    if (genres === "all") {
      setFilteredSong(songs)
      // console.log(filteredSong)
    } else {
      const FILTERSONG = songs.filter((item) => {
        return item.genre.key === genres
      })
      setFilteredSong(FILTERSONG)
    }
  }

  const fetchedData = async () => {
    const topAlbumURL = `${config.backendEndpoint}/albums/top`
    const newAlbumURL = `${config.backendEndpoint}/albums/new`
    const allSongsURL = `${config.backendEndpoint}/songs`

    const TOP_ALBUM_Response = await axios.get(topAlbumURL);
    const TOP_ALBUM_Response_Data = TOP_ALBUM_Response.data;
    setTopAlbums(TOP_ALBUM_Response_Data)

    const NEW_ALBUM_Response = await axios.get(newAlbumURL);
    const NEW_ALBUM_Response_Data = NEW_ALBUM_Response.data;
    setNewAlbums(NEW_ALBUM_Response_Data)

    // const ALL_SONG_Response = await axios.get(allSongsURL);
    // const ALL_SONG_Response_Data = ALL_SONG_Response.data;
    // setAllSongs(ALL_SONG_Response_Data)


    const ALL_SONG_Response = await axios.get(allSongsURL);
    const ALL_SONG_Response_Data = ALL_SONG_Response.data;
    setSongs(ALL_SONG_Response_Data)
    setFilteredSong(ALL_SONG_Response_Data)

  }

  useEffect(() => {
    fetchedData()
  }, [])



  return (
    console.log(filteredSong),
    <>
      <Navbar />
      <Herosection />
      <Cardgrid
        album_name={"Top Album"}
        cardData={topAlbums}
        navId={"top-album"}
      // disabled={false}
      />
      <hr />
      <Cardgrid
        // disabled={false}
        album_name={"New Album"}
        cardData={newAlbums}
        navId={"new-album"}
      />
      <hr />
      {/* <Cardgrid
        disabled={true}
        album_name={"Songs"}
        cardData={genre === "all" ? allSongs : filteredSong}
        handelClick={handlebtnClick}
        className={genre}
      /> */}

      <FilterSection
        album_name={"All Songs"}
        cardData={filteredSong}
        filterSongsByGenres={filterSongsByGenresFunction}
        navId={"filter-album"}
      />
      <hr />
      <Faq />

    </>
  )
}

export default App