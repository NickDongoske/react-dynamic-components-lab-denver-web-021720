//your code here
import React,  {Component} from 'react';
// import Index from './index.js'



class Comment extends Component {
  render() {
    return (
      <div className='comment'>
      {this.props.commentText}
      </div>
    )
  }
}
export default Comment;