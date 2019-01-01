import React from 'react';

class Comment extends React.Component {
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
    render() {
        return (
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.comment.username}</span>
                </div>：
                <p>{this.props.comment.content}</p>
                <span className="comment-createdtime">
                    {this.state.timeStirng}
                </span>
            </div>
        )
    }
}

export default Comment;