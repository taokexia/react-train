import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types'
class CommentList extends React.Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteSubmit: PropTypes.func
    }
    static defaultProps = {
        comments: []
    }
    handleDelete(index) {
        this.props.onDeleteSubmit(index)
    }
    render() {
        return (
            <div className="comment-list">
                {this.props.comments.map((comment, i) => <Comment 
                    comment={comment} 
                    key={i} 
                    index={i}
                    onDeleteSubmit={this.handleDelete.bind(this)}
                />)}
            </div>
        )
    }
}

export default CommentList