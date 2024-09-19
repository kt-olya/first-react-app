import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/736x/ee/77/c5/ee77c5b7ba389cd16ecbc5e2b80d3a62.jpg"></img>
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
