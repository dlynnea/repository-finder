import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RepoCard from './RepoCard';

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [lang] = useState(["language", "name"])
    const [selectLanguage, setSelectLanguage] = useState(['All'])
    const [selectSort, setSelectSort] = useState(['Default'])

    function search(repos) {
        return repos?.filter(repo => {
            if (repo.language == selectLanguage) {
            return lang.some(column => {
                return repo[column]?.toString().toLowerCase().indexOf(inputValue.toLowerCase()) > -1
                })
            } else if (selectLanguage == 'All') {
            return lang.some(column => {
                return repo[column]?.toString().toLowerCase().indexOf(inputValue.toLowerCase()) > -1
                })
            } 
        })  
    }

    function sortByStars(a, b) {
        if (selectSort == 'Star-Count') {
            return b.stargazers_count - a.stargazers_count
        } else if (selectSort == 'Default') {
            return;
        }
    }

    const sortedFiltered = search(repos)?.sort(sortByStars);

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
        })
            .catch(err => {
            setLoading(false);
            console.error(err);
        });
    }, [inputValue]);

    return(
        <div className="home" id="home">
            <div className="search-content">
                <h1 className="sr-only">
                    Search Repositories
                </h1>
                <div className="search-wrapper">
                    <div className="select select-sort">
                        <select
                            onChange={(e) => setSelectSort(e.target.value)}
                            className="sort-by" aria-label="Sort">
                                <option value="Default">Sort (Default)</option>
                                <option value="Star-Count">Star Count</option>
                        </select> 
                    </div>
                    <input
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)}
                        className="search-input"
                        type="text" 
                        name="query"
                        placeholder="Search..."
                    />
                <div className="select select-lang">
                    <select
                        onChange={(e) => setSelectLanguage(e.target.value)}
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
            <div className="repos-wrapper">
                {sortedFiltered?.map(repo => (
                    <Link to={`/${repo.owner.login}/${repo.name}`}>
                        <RepoCard key={repo.id} language={repo.language} username={repo.owner.login} name={repo.name} avatar={repo.owner.avatar_url} stars={repo.stargazers_count} id={repo.id} />
                    </Link>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Home;