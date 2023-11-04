import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './singlecomment';
import profile1 from './images/a.JPG';
import UserCard from './usercard';

const App = () => {
  return(
    <div className='ui comments'>
      <UserCard>
        <SingleComment
          name='Akash Guje'
          comment="Its'Great!!"
          time="Today at 5:00PM"
          picture={profile1}/>
      </UserCard>
      <UserCard><SingleComment name='Sarah' comment='Superb:D' time="Today at 6:00PM" picture={profile1}/></UserCard>
      <UserCard><SingleComment name='Jack' comment='Its Amazing' time="Today at 8:00PM" picture={profile1}/></UserCard>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
