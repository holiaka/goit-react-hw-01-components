import PropTypes from "prop-types";
import { CardWrapper, FriendAvatar, FriendName, FriendStatus,  } from "./FriendListItem.styled"; 

export const FriendListItem = ({ friend: {avatar, name, isOnline } }) => {
    return (
        <CardWrapper>
            <FriendStatus>&#8226;</FriendStatus>
            <FriendAvatar src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </CardWrapper>
    )
}

FriendListItem.propTypes = {
    friend: PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.oneOf(['true', 'false'])
    }).isRequired,
}

