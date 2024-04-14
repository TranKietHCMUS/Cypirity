import React from 'react';
import PropTypes from 'prop-types';
import './StoryItem.css'

StoryItem.propTypes = {
    itemData: PropTypes.object,
};

function StoryItem(props) {
    const {itemData} = props;
    return (
        <div style={{"display" : "inline-flex", "flexDirection" : "column", "marginBottom" : "90px"}}>
            <div class='items'>
                <img src={itemData.base64Image} width={"200px"} height={"200px"}/>
                <p style={{"width" : "200px"}}>{itemData.story}</p>
            </div>
        </div>
    );
};


export default StoryItem;