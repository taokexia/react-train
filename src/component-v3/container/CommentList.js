import React from 'react'
import PropTypes from 'prop-types'
import CommentList from '../component/CommentList'
import {connect} from 'react-redux'
import {initComments, deleteComments} from '../reducer/comments'

class CommentListContainer extends React.Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteSubmit: PropTypes.func,
        initComments: PropTypes.func
    }
    static defaultProps = {
        comments: []
    }
    componentDidMount() {
        this._loadComments()
    }
    _loadComments() {
        let comments = localStorage.getItem('comments')
        comments = comments ? JSON.parse(comments) : []
        this.props.initComments(comments)
    }
    handleDelete(index) {
        const { comments } = this.props
        console.log(comments)
        const newComments = [
            ...comments.slice(0, index),
            ...comments.slice(index+1)
        ]
        localStorage.setItem('comments', JSON.stringify(newComments))
        if(this.props.onDeleteSubmit)
            this.props.onDeleteSubmit(index)
    }
    render() {
        return (
            <CommentList comments={this.props.comments} onDeleteSubmit={this.handleDelete.bind(this)}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments : state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initComments: (comments) => {
            dispatch(initComments(comments))
        },
        onDeleteSubmit: (commentIndex) => {
            dispatch(deleteComments(commentIndex))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentListContainer)