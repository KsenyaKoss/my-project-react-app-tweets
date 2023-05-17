import {
  StyledAvatarImg,
  StyledButton,
  StyledHeroImg,
  StyledImgFrame,
  StyledP,
  StyledTweet,
} from "./StyledTweet";
import { useDispatch} from "react-redux";
import { updateUser } from "../../redux/users/operations";
import PropTypes from 'prop-types';



const Tweet = ({ user }) => { 
  const dispatch = useDispatch();
  const formatFollowersWithComma = (number) =>
    number.toLocaleString().replace(" ", ",");

  const handleSubscribe = user => {
    const newUser =  {...user,
       isSubscribe: !user.isSubscribe,
       followers: user.isSubscribe? user.followers - 1 : user.followers + 1 }
     dispatch(updateUser(newUser))
  };

  return (  
    <StyledTweet>
    <div>
      <img
        src='/images/logo/Logo_desk@1x.png'
        alt="logo"
      />
      <StyledHeroImg
        src="/images/hero/picture2 1_desk@1x.png"
        alt="hero"
      />
    </div>
 
 <StyledImgFrame>
 <StyledAvatarImg
      src={`${user.avatar}`}
      alt="avatar"
    />
 </StyledImgFrame>


    <div>
      <StyledP>{user.tweets} TWEETS</StyledP>
      <StyledP>{formatFollowersWithComma(user.followers)} FOLLOWERS</StyledP>
      <StyledButton onClick={()=>handleSubscribe(user)} 
      subscribed={user.isSubscribe}> {!user.isSubscribe? 'Follow' : 'Following'}
      </StyledButton>
    </div>
  </StyledTweet> 
  )
};

export default Tweet;

Tweet.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    id: PropTypes.string,
    followers: PropTypes.number,
    isSubscribe: PropTypes.bool,

  })
};

