import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        <textarea></textarea> {/* поле ввода */}
        <button> PUSH</button>
      </div>
      <div>New post</div>
      <div className={s.posts}>
        <Post message="Hi" likesCount="0"></Post>
        <Post message="Bye" likesCount="23"></Post>
      </div>
    </div>
  );
};

export default MyPosts;
