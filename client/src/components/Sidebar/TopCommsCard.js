import { useNavigate } from 'react-router-dom'
import classes from './TopCommsCard.module.css';
const TopCommsCard = (props) => {
  const navigate = useNavigate()
  return (
    <div className={classes.container}>
        <h4 className={classes.h4}>Communities</h4>
        <button onClick={() => navigate('/r/funny')} className={classes.buttons}>r/Funny</button>
        <button onClick={() => navigate('/r/memes')} className={classes.buttons}>r/Memes</button>
        <button onClick={() => navigate('/r/cute')} className={classes.buttons}>r/Cute</button>        
    </div>
  );
}

export default TopCommsCard;
