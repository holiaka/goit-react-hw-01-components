import PropTypes from "prop-types";
import { ProfilCard, UserInformation, UserPhoto, UserName } from "./Profil.styled";

export const Profil = ({ user: { username, tag, location, avatar, stats: { followers, views, likes } } }) => {
    return (
        <ProfilCard>
            <UserInformation>
                <UserPhoto
                    src={avatar}
                    alt={username}
                />
                <UserName>{username}</UserName>
                <p>{tag}</p>
                <p>{location}</p>
            </UserInformation>
            <ul>
                <li>
                    <span>Followers</span>
                    <span>{followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{likes}</span>
                </li>
            </ul>
        </ProfilCard>
    )
};

Profil.propTypes = {
    user: PropTypes.exact({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })
    }).isRequired,
};
