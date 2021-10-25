import React, { useState, useEffect } from 'react';
import RepoDetails from './RepoDetails';

const Repo = ({ match }) => { 
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch(`https://api.github.com/repos/${match.params.username}/${match.params.name}`)
        .then(res => res.json())
        .then(
          (result) => {
              setIsLoaded(true);
              setItems([result]);
          },
          (error) => {
              setIsLoaded(true);
              setError(error);
          }
        )
    }, []);

    return (
        <div className="detail-container">
          {items && items?.map(item => <RepoDetails key={item.id} repos={items} />)}
        </div>
    )
}

export default Repo;