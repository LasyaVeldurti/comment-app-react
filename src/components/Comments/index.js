import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const initialCommentsList = []

// Write your code here

class Comments extends Component {
  state = {commentList: initialCommentsList, name: '', comments: ''}

  onAddComment = event => {
    event.preventDefault()
    const {name, comments} = this.state
    const initialBackgroundColorClassName = ` ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name,
      comments,
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
    }))
    this.setState({name: '', comments: ''})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comments: event.target.value})
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(
        eachComment => id !== eachComment.id,
      ),
    }))
  }

  render() {
    const {commentList, name, comments} = this.state
    const count = commentList.length

    return (
      <div className="bg-container">
        <div className="ui-container">
          <img
            className="comments-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
          <div className="input-container">
            <h1 className="heading">Comments</h1>
            <p className="caption">Say something about 4.0 Technologies</p>
            <form className="form-container" onSubmit={this.onAddComment}>
              <input
                onChange={this.onChangeName}
                value={name}
                className="input-comment"
                placeholder="Your Name"
                type="text"
              />

              <textarea
                onChange={this.onChangeComment}
                value={comments}
                className="comment-area"
                placeholder="Your Comments"
                rows="4"
                cols="50"
              >
                {}
              </textarea>

              <button className="add-comment" type="submit">
                Add Comment
              </button>
            </form>
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="comment-count-contianer">
          <button className="comment-button" type="button">
            {count}
          </button>
          <p className="count">Comments</p>
        </div>

        <ul className="comment-container">
          {commentList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              key={eachComment.id}
              toggleIsLiked={this.toggleIsLiked}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
