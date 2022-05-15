import './post.css'
import { MoreVert } from '@material-ui/icons'
import { Users } from '../../dummyData'


export default function Post({post}) {
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img className='postProfileImg' src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt='on'/>
                    <span className='PostUsername'>
                        {Users.filter((u) => u.id === post?.userId)[0].username}
                    </span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className='postTopRight'>
                    <MoreVert />
                </div>
            </div>
            <div className='postCenter'>
                <span className='postText'>{post?.desc}</span>
                <img className='postImg' src={post.photo}/>
            </div>
            <div className='postButton'>
                <div className='postButtonLeft'>
                    <img className='likeIcon' src='assets/like.png' />
                    <img className='likeIcon' src='assets/heart.png' />
                    <span className='postLikeCounter'>{post.like} people like it</span>
                </div>
                <div className='postButtonRight'>
                    <span className='postCommentText'>{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
