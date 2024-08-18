import React from 'react';
import './Feed.css'; // Import a CSS file for styles

const Feed = () => {
  const feedData = [
    {
      profilePhoto: './assets/img/img/feed-1.jpg',
      name: 'Lili Rose',
      location: 'Dubai',
      timeAgo: '15 MINUTES AGO',
      postPhoto: './assets/img/img/feed-1.jpg',
      likedBy: [
        './assets/img/profile-9.jpg',
        './assets/img/profile-3.jpg',
        './assets/img/profile-5.jpg'
      ],
      likes: '1,754',
      caption: 'Lorem ipsum dolor sit amet',
      hashtag: '#lifestyle',
      comments: '317'
    },
    {
        profilePhoto: './assets/img/profile-3.jpg',
        name: 'Lili Rose',
        location: 'Dubai',
        timeAgo: '15 MINUTES AGO',
        postPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OSlUqgjBhoh8inDzZlEVDE9FvB-8q_P7iexhyAeLRH_WG99piBfN_6iFU-Gdv1wDJME&usqp=CAU',
        likedBy: [
          './assets/img/profile-9.jpg',
          './assets/img/profile-3.jpg',
          './assets/img/profile-5.jpg'
        ],
        likes: '1,754',
        caption: 'Lorem ipsum dolor sit amet',
        hashtag: '#lifestyle',
        comments: '317'
      },
      {
        profilePhoto: './assets/img/profile-3.jpg',
        name: 'Lili Rose',
        location: 'Dubai',
        timeAgo: '15 MINUTES AGO',
        postPhoto: './assets/img/feed-5.jpg',
        likedBy: [
          './assets/img/profile-9.jpg',
          './assets/img/profile-3.jpg',
          './assets/img/profile-5.jpg'
        ],
        likes: '1,754',
        caption: 'Lorem ipsum dolor sit amet',
        hashtag: '#lifestyle',
        comments: '317'
      },
    // Add more feed data objects here
  ];

  return (
    <div className="feeds">
      {feedData.map((feed, index) => (
        <div className="feed" key={index}>
          <div className="post-head">
            <div className="post-user">
              <div className="profile-photo">
                <img src={feed.profilePhoto} alt="Profile" />
              </div>
              <div className="post-info">
                <h3>{feed.name}</h3>
                <small className="text-muted">{feed.location}, {feed.timeAgo}</small>
              </div>
            </div>
            <span className="edit-post"><i className="uil uil-ellipsis-h"></i></span>
          </div>
          <div className="post-photo">
            <img src={feed.postPhoto} alt="Post" />
          </div>
          <div className="action-button">
            <div className="interaction-buttons">
              <span className="like-btn"><i className="uil uil-heart"></i></span>
              <span><i className="uil uil-comment-dots"></i></span>
              <span><i className="uil uil-share"></i></span>
            </div>
            <div className="bookmark"><i className="uil uil-bookmark"></i></div>
          </div>
          <div className="liked-by">
            {feed.likedBy.map((imgSrc, i) => (
              <span key={i}><img src={imgSrc} alt="Liked by" /></span>
            ))}
            <p>Liked by <b>Ernest Achiever</b> and <b>{feed.likes} others</b></p>
          </div>
          <div className="caption">
            <p><b>{feed.name}</b> {feed.caption}<span className="hashtag">{feed.hashtag}</span></p>
          </div>
          <div className="view-comments text-muted">View all {feed.comments} comments</div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
