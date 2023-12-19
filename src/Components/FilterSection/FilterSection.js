import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Carosel from '../Carosel/Carosel'
import { config } from '../../Config/Endpoint';
import "./FilterSection.css"

function FilterSection({ album_name, cardData, filterSongsByGenres }) {

    const [genres, setGenres] = useState([]);
    const [selectedTabs, setselectedTabs] = useState("all")



    const fetchedData = async () => {
        const genresURL = `${config.backendEndpoint}/genres`;
        const GENRES_Response = await axios.get(genresURL);
        const GENRES_Response_Data = [{
            key: "all",
            label: "All"
        }, ...GENRES_Response.data.data];
        setGenres(GENRES_Response_Data)
    }

    useEffect(() => {
        fetchedData()
    }, [])

    return (
        <div className='song-album-grid'>
            <div className='grid-navigation-headers'>
                <h3>{album_name}</h3>
            </div>
            <div className='tab-container'>
                <Tabs
                    value={selectedTabs}
                    onChange={(e, value) => {
                        setselectedTabs(value)
                        filterSongsByGenres(value)
                        // filterFunction(genres[value].key)
                        // console.log(value)
                    }}

                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "var(--color-green)"
                        }
                    }}
                >
                    {
                        genres?.map((item) =>
                            <Tab
                                key={item.key}
                                className='tab'
                                value={item.key}
                                label={item.label}
                            />
                        )
                    }
                </Tabs>
            </div>
            <Carosel data={cardData} />
        </div >)

}

export default FilterSection