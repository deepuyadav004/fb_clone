import './post.css'
import { MoreVert } from '@material-ui/icons'


export default function Post() {
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img className='postProfileImg' src='/assets/person/1.jpeg'/>
                    <span className='PostUsername'>Deepu Yadav</span>
                    <span className='postDate'>5 mins ago</span>
                </div>
                <div className='postTopRight'>
                    <MoreVert />
                </div>
            </div>
            <div className='postCenter'>
                <span className='postText'>Hey! Its my first post</span>
                <img className='postImg' src='/assets/post/1.jpeg'/>
            </div>
            <div className='postButton'>
                <div className='postButtonLeft'>
                    <img className='likeIcon' src='assets/like.png' />
                    <img className='likeIcon' src='assets/heart.png' />
                    <span className='postLikeCounter'>32 people like it</span>
                </div>
                <div className='postButtonRight'>
                    <span className='postCommentText'>9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
