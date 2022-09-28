import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';
import TopicSearch from '../components/TopicSearch';
import Results from '../components/Results';
import './RedditContainer.css';

const RedditContainer = () => {

    const [posts, setPosts] = useState([]);
    const [topicName, setTopicName] = useState('');

    let getTopic = (topicName) => {
        fetch(`https://www.reddit.com/r/${topicName}.json`)
            .then(res => res.json())
            .then(topic => setPosts(topic.data.children));
    };

    useEffect(() => {
        getTopic()
    }, []);

    const onTopicSelected = (topicName) => {
        setTopicName(topicName);
        getTopic(topicName);
    };

    return (
        <article className='main-container'>
            <TopicSearch onTopicSelected={onTopicSelected} />
            <Results topicName={topicName} />
            <PostList posts={posts} />
        </article>
    );
};

export default RedditContainer;