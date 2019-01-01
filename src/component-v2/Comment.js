import React from 'react';
import PropTypes from 'prop-types'
class Comment extends React.Component {
    static propTypes = {
        onDeleteSubmit: PropTypes.func,
        comment: PropTypes.object
    }
    constructor() {
        super()
        this.state = {
            timeStirng: ''
        }
    }
    componentWillMount() {
        this._updateTimeString();
        this.timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    _updateTimeString() {
        const createdTime = this.props.comment.createdTime
        const duration = (+new Date() - createdTime) / 1000
        this.setState({
            timeStirng: duration > 3600 
                ? `${Math.round(duration / 3600)} 小时前` 
                :  duration > 60 
                    ? `${Math.round(duration / 60)} 分钟前` 
                    : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }
    _getProcessedContent(content) {
        return content
            .replace(/&/g, '&')
            .replace(/</g, '<')
            .replace(/>/g, '>')
            .replace(/'/g, "'")
            .replace(/"/g, '"')
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }
    handleDelete() {
        this.props.onDeleteSubmit(this.props.index)
    }
    render() {
        return (
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.comment.username}</span>
                </div>：
                <p dangerouslySetInnerHTML={{__html: this._getProcessedContent(this.props.comment.content)}}></p>
                <span className="comment-createdtime">
                    {this.state.timeStirng}
                </span>
                <span className="comment-delete" onClick={this.handleDelete.bind(this)}>
                    删除
                </span>
            </div>
        )
    }
}

export default Comment;