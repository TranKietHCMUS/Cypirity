import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StoryList from '../components/StoryList';
import axios from 'axios'
import { useEffect } from 'react';


function StoryPage() {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3000/api/showstories')
        .then(res => {
            setListData(res.data)
        })
        .catch(error => console.log(error))

        console.log(listData)
    }, [])

    return (
        <div>
            <StoryList listData = {listData} />
        </div>
    );
};

export default StoryPage;