import React from 'react';

const CommentDetail = ({autor,fecha,image}) => {
    return(
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={image}></img>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {autor}
                </a>
                <div className="metadata">
                <span className="date">{fecha}</span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>
    </div>
    );

};
export default CommentDetail;