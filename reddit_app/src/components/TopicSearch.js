import React, { useState } from 'react';
import './TopicSearch.css';

const TopicSearch = ({ onTopicSelected }) => {

    const [topicChange, setTopicChange] = useState('');

    const handleTopicChange = (evt) => {
        setTopicChange(evt.target.value);
    };

    const handleTopicSubmit = (evt) => {
        evt.preventDefault();
        const topicToChange = topicChange.trim();
        onTopicSelected(topicToChange);
        setTopicChange('');
    };

    return (
        <section className='form-container'>
            <form className='form' onSubmit={handleTopicSubmit}>
                <label htmlFor='search'></label>
                <input className='search' type='text' name='search' placeholder='Search here' autoFocus autoComplete='off' required value={topicChange} onChange={handleTopicChange} />
                <button>Search</button>
            </form>
        </section>
    );
};

export default TopicSearch;