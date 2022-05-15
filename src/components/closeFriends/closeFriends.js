import "./closeFriends.css"

export default function closeFriends({user}) {
  return (
    <li className='sidebarFriend'>
        <img className='sidebarFriendImg' src={user.profilePicture} />
        <span className='sidebarFriendName'>{user.username}</span>
    </li>
  )
}
