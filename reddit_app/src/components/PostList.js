import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts }) => {

    const postItems = posts.map((post, index) => {
        return <PostItem post={post} key={index} />
    });

    return (
        <ul>
            {postItems}
        </ul>
    );
};

export default PostList;