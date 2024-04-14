import React from 'react';
import PropTypes from 'prop-types';
import StoryItem from './StoryItem';

StoryList.propTypes = {
    listData: PropTypes.func,
};

function StoryList(props) {
    const {listData} = props;

    return (
        <div>
            {
                listData.map(value => (
                    <StoryItem key={value.id} itemData={value}/>
                ))
            }
        </div>
    );
};

export default StoryList;