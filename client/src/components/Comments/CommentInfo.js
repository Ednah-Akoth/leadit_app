// COMBINE THIS WITH COMMENT ITEM!
import classes from './CommentInfo.module.css';
import CommentOpts from './CommentOpts';
const CommentInfo = (props) => {
  return (
    <div className={classes.comment}>
        <h3 className={classes.username}>User</h3>
        <p>this is peek perfection. nothing can get more perfect than this play. When someone asks what perfect ow1 was, just show them this clip and be ready to catch them when they fall unconscious /s</p>
        <CommentOpts/>
    </div>
  );
}

export default CommentInfo;
