import React from 'react';
import ReactDOM from 'react-dom';
//import profile1 from './images/a.JPG';

const SingleComment = (props) => {
  return(
    <div  className='comment'>
      <a href="/" className='avatar'>
        <img alt="profile" src={props.picture}/>
      </a>
      <div className='content'>
        <a href='/' className='author'>{props.name}
        </a>
        <div className='metadata'>
          <span className='date'>
          {props.time}
          </span>
        </div>
        <div  className='text'>
            {props.comment}
        </div>
      </div>
      </div>
  )
}

export default SingleComment
