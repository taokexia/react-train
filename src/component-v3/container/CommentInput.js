import React from 'react';
import PropTypes from 'prop-types'
import CommentInput from '../component/CommentInput'
import {connect} from 'react-redux'
import {addComments} from '../reducer/comments'

class CommentInputContainer extends React.Component {
    static propTypes = {
        comments: PropTypes.array,
        addComment: PropTypes.func
    }
    constructor(props) {
        super(props)
        this.state = {
            username: props.username,
            content: ''
        }
    }
    componentWillMount() {
        this._loadUserName()
    }
    _loadUserName() {
        const username = localStorage.getItem('username')
        if(username) {
            this.setState({
                username
            })
        }
    }
    _saveUername(username) {
        localStorage.setItem('username', username)
    }
    handleSubmit(comment) {
        // 评论数据的验证
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        const {comments} = this.props
        const newComments = [...comments, comment]
        localStorage.setItem('comments', JSON.stringify(newComments))
        if(this.props.addComment) {
            this.props.addComment(comment)
        }
    }
    render() { 
        return (
            <CommentInput 
                username={this.state.username}
                onUserNameInputBlur={this._saveUername.bind(this)}
                onSubmit={this.handleSubmit.bind(this)}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (comment) => {
            dispatch(addComments(comment))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentInputContainer)