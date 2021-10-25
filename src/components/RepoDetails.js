import React from 'react';
import moment from 'moment';
import { faPlusSquare, faStar, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RepoDetails = ({id, repos}) => {
    const renderDetails = repos.map(repo => {
        return (
            <div className="repo-details" key={id}>
                <div className="img">
                    <img className="img" src={repo.owner.avatar_url} alt={repo.name} />
                </div>
                <div className="details-content">
                    <div className="content-text">
                        <h4 className="details-name">
                            <a href={repo.html_url} target="_blank">{repo.name}</a>
                        </h4>
                        <div className="info">
                            <div className="list">
                                <p><span><i className="fas fa-code"></i></span><FontAwesomeIcon icon={faUser} /> {repo.owner.login}</p>
                            </div>
                            <div className="list">
                                <p><span><i className="fa fa-code"></i></span><FontAwesomeIcon icon={faGem} />  {repo.language ? repo.language : 'unknown'}</p>
                            </div>
                            <div className="list">
                                <p><span><i className="fas fa-code"></i></span><FontAwesomeIcon icon={faCalendar} /> {moment(repo.pushed_at).format('MMMM Do YYYY')}</p>
                            </div>
                            <div className="list">
                                <p><span><i className="fas fa-code"></i></span><FontAwesomeIcon icon={faStar} /> stars: {repo.stargazers_count}</p>
                            </div>
                            <div className="list">
                                <p><span><i className="fas fa-code"></i></span><FontAwesomeIcon icon={faPlusSquare} /> subscribers: {repo.subscribers_count}</p>
                            </div>
                            <div className="list">
                                <p><span><i className="fas fa-code"></i></span><FontAwesomeIcon icon={faThumbsUp} />forks: {repo.forks_count}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            {renderDetails}
        </div>
    )
}
    
export default RepoDetails;