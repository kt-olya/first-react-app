import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/736x/ee/77/c5/ee77c5b7ba389cd16ecbc5e2b80d3a62.jpg"></img>
      {props.message}
      <div>
        <span>like</span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
