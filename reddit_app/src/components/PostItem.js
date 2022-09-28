import React from 'react';
import './PostItem.css';

const PostItem = ({ post }) => {
    return (
        <li className='post-item'>
            <a href={post.data.url} target='_blank' rel='noreferrer'>{post.data.title}</a>
        </li>
    );
};

export default PostItem;