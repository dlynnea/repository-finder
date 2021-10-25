import React from 'react';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RepoCard = ({ name, language, login, id, avatar, stars }) => {
        console.log('card login', login)
    return (
        <div className="card" key={id}>
            <img className="card__image" src={avatar} alt={name} />
            <div className="card__body">
                <h2 className="card__title">{name}</h2>
                <p className="card__language">{language}</p>
                <p className="card__stars"><FontAwesomeIcon icon={faStar} /><span>{stars} </span></p>
                <button className="card__btn">More Details</button>
            </div>
        </div>
    )
}

export default RepoCard;