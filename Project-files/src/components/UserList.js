 import styles from '../styles/home.module.css';  
 import { usePosts } from '../hooks';
const UserList = ({ post }) => {    
    const posts = usePosts(); 
  return (
    <div className={styles.friendsList} >
    <div className={styles.header}>Users @message-Me</div> 
    {posts.data.map((post) => ( 
          <div className={styles.friendsItem}>
          <div className={styles.friendsImg}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="user-pic"
            /> <span className={styles.userName}>{post.user.name}</span>
          </div>  
        </div>
        ))} 
    </div>
  );
};
export default UserList;
