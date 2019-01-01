import React from 'react';
import Comment from './Comment';
class CommentList extends React.Component {
    static defaultProps = {
        comments: []
    }
    render() {
        return (
            <div className="comment-list">
                {this.props.comments.map((comment, i) => <Comment comment={comment} key={i}/>)}
            </div>
        )
    }
}

export default CommentList