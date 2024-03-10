import classes from "./Post.module.css";
// eslint-disable-next-line react/prop-types
function Post({author, body}){
    //const chooseName = Math.random() > 0.5 ? names[0]:names[1];
    return <li className={classes.post}>
        {/* eslint-disable-next-line react/prop-types */}
        <h1 className={classes.author}>{author}</h1>
        {/* eslint-disable-next-line react/prop-types */}
        <p1 className={classes.text}>{body}!</p1>
    </li>;
}

export default Post;