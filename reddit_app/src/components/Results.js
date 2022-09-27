import React from 'react';
import './Results.css';

const Results = ({ topicName }) => {
    return (
        <section className='results'>
            {topicName ? <h3 className='results'>Results for: <span id='topic-name'>{topicName}</span></h3> : null}
        </section>
    );
};

export default Results;