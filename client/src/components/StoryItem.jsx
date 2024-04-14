import React from 'react';
import PropTypes from 'prop-types';
import './StoryItem.css'

StoryItem.propTypes = {
    itemData: PropTypes.object,
};

function StoryItem(props) {
    const {itemData} = props;
    return (
        <div>
            <div class='items'>{itemData.base64Image} {itemData.story}</div>
        </div>
    );
};


export default StoryItem;