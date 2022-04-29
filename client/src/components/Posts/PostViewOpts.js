import classes from './PostViewOpts.module.css';
import { CgComment } from "react-icons/cg";
import { FaAward } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import ChatIcon from "./chat_icon.png"

const PostViewOpts = (props) => {
	return (
		<div className={props.className}>
			<button className={classes.comments_btn}>
				{/* <img src={ChatIcon} className={classes.icon}></img><p>Comments</p> */}
				<CgComment size={18} className={classes.icon}/><p>Comments</p>
			</button>
			
		</div>
	);
}

export default PostViewOpts;