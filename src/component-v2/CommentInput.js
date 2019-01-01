import React from 'react';
import PropTypes from 'prop-types'
class CommentInput extends React.Component {
    static propTypes = {
        onClick: PropTypes.func
    }
    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    componentWillMount() {
        let username = this._loadUsername();
        this.setState({
            username: username
        })
    }
    componentDidMount() {
        this.textarea.focus();
    }
    _saveUsername(username) {
        localStorage.setItem('username', username)
    }
    _loadUsername() {
        return localStorage.getItem('username')
    }
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    handleBlur(event) {
        this._saveUsername(event.target.value)
    }
    handleSubmit() {
        if(this.props.onSubmit) {
            const { username, content } = this.state
            this.props.onSubmit({username, content}) 
        }
        this.setState({ 
            content: ''
        })
    }
    render() { 
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名:</span>
                    <div className="comment-field-input">
                        <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)} onBlur={this.handleBlur.bind(this)}/>
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容:</span>
                    <div className="comment-field-input">
                        <textarea ref={(textarea)=> this.textarea = textarea} value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput