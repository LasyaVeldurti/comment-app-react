// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props
  const {name, comments, isLiked, id, initialClassName} = commentDetails
  const commentedTime = formatDistanceToNow(new Date())

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeText = isLiked ? 'liked-text' : ''

  const onLiked = () => {
    toggleIsLiked(id)
  }

  const onDelete = () => {
    deleteComment(id)
  }

  return (
    <li>
      <div className="name-contianer">
        <button className={`name-button  ${initialClassName} `} type="button">
          {name[0]}
        </button>
        <p>{name} </p>
        <p className="commented-time">{commentedTime} </p>
      </div>

      <p>{comments} </p>
      <div className="like-container">
        <img className="like-img" src={likeImgUrl} alt="like" />
        <button
          onClick={onLiked}
          className={`like-btn  ${likeText} `}
          type="button"
        >
          Like
        </button>

        <button
          onClick={onDelete}
          className="delete-button"
          data-testid="delete"
          type="button"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="horizontal-line" />
    </li>
  )
}

export default CommentItem
