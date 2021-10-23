import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [select, setSelect] = useState(['All'])

    const search = (event) => {
        event.preventDefault();
        setInputValue(event.target.query.value)
    }

    useEffect(() => {
        if (!inputValue) {
          return;
        }
        setLoading(true);
        fetch(`https://api.github.com/search/repositories?q=${inputValue}`)
            .then(res => res.json())
            .then(data => {
            setLoading(false);
            setRepos(data.items);
            console.log('HOME', data.items)
        })
            .catch(err => {
            setLoading(false);
            console.error(err);
        });
    }, [inputValue]);

    return(
        <div className="home" id="home">
            <div className="container">
                <div className="search-content">
                <div className="block">
                <div className="search-wrapper">
                <label htmlFor="search-form">
                    <h1 className="sr-only">
                        Search Repositories
                    </h1>
                </label>
               <form className="searchForm" onSubmit={(event) => search(event)}>
                    <input
                        className="search-input"
                        type="text" 
                        name="query"
                        palceholder="Search Github Repos..."
                    />
                <button className="btn">{loading ? 'Searching...' : 'Search'}</button>
                </form>
                <div className="select">
                    <select
                        onChange={(event) => setSelect(event.target.value)}
                        className="select-language" aria-label="Filter Repositories by Language">
                        <option value="All">Filter By Language</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="TypeScript">TypeScript</option>
                        <option value="Python">Python</option>
                        <option value="Clojure">Clojure</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Java">Java</option>
                        <option value="C++">C++</option>
                        <option value="Swift">Swift</option>
                        <option value="PHP">PHP</option>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                    </select> 
                    <span className="focus"></span>
                </div>
                </div>
                </div>
            </div>
            <div className="repo-container">
                {repos && repos.map(repo => (
                    <Link to={`/${repo.owner.login}/${repo.name}`}>
                        {/* <Card key={repo.id} language={repo.language} username={repo.owner.login} name={repo.name} avatar={repo.owner.avatar_url} stars={repo.stargazers_count} /> */}
                    </Link>
                ))}
            </div>
            </div>
        </div>
    )

}

export default Home;