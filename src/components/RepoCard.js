import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RepoCard = ({ name, language, login, id, avatar, stars }) => {

    console.log('CARD', language, login, name)

    return (
        <>
            <div className="repo" key={id}>
                {/* <div className="repo-image"> */}
                    <img src={avatar} alt={name} />
                {/* </div> */}
                {/* <div className="repo-content"> */}
                    <h2 className="title">
                        {name}
                    </h2>
                    <ul className="repo-detail">
                        <li>language: <span>{language}</span></li>
                        <li>name: <span>{name}</span></li>
                        <li>login: <span>{login}</span></li>
                        <li><FontAwesomeIcon icon={faStar} /><span>{stars} </span></li>
                    </ul>
                {/* </div> */}
            </div>
        </>
    )
}

export default RepoCard;