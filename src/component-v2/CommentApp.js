import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        let str = this._loadComments()
        let comments = JSON.parse(str)
        // console.log(comments)
        if (comments === null ) 
            return 
        this.setState({
            comments: comments
        })
    }
    _saveComments(comments) {
        let str = JSON.stringify(comments)
        // console.log("str"+str)
        localStorage.setItem('comments', str)
    }
    _loadComments() {
        return localStorage.getItem('comments')
    }
    handleSubmitComment(comment) {
        if(!comment) return
        if(!comment.username) return alert("请输入用户名！")
        if(!comment.content) return alert("请输入内容")
        this.state.comments.push(comment);
        this._saveComments(this.state.comments)
        this.setState({
            comments: this.state.comments
        })
    }
    handleDeleteSubmit(index) {
        let str = this._loadComments()
        let comments = JSON.parse(str)
        comments.splice(index, 1)
        this._saveComments(comments)
        this.setState({
            comments: comments
        })
    }
    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments} onDeleteSubmit={this.handleDeleteSubmit.bind(this)} />
            </div>
        )
    }
}

export default CommentApp