import React, { Component } from 'react'

class CommentInput extends Component {
    constructor () {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }

    handleUsernameChange (event) {
        this.setState({
            username: event.target.value
        })
    }
    handleContentChange (event) {
        this.setState({
            content: event.target.value
        })
    }
    handleSubmit () {
        if (this.props.onSubmit) {
            const { username, content } = this.state
            this.props.onSubmit({username, content})
        }
        this.setState({ content: '' })
    }
    render () {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} onChange={(e)=>this.handleUsernameChange(e)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content} onChange={(e)=>this.handleContentChange(e)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={()=>this.handleSubmit()}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput