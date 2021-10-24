import React from 'react';
import moment from 'moment';

const RepoDetails = ({id, repos}) => {
    // let date = moment();
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
                                <p><span><i className="fa fa-code"></i></span> {repo.language ? repo.language : 'unknown'}</p>
                            </div>
                            <div className="list">
                                <p><span><i className="fas fa-code"></i></span> {repo.owner.login}</p>
                            </div>
                            <div className="list">
                                <p><span><i className="fas fa-code"></i></span> stars: {repo.stargazers_count}</p>
                            </div>
                            <div className="list">
                                <p><span><i className="fas fa-code"></i></span> date: {moment(repo.pushed_at).format()}</p>
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