import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const result = await axios(
                'https://www.bookmarks.dev/api/public/bookmarks',
            );
            setData(result.data);
        };

        fetchData();
    }, []);


    return (

        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="https://www.bookmarks.dev">
                    <img src="/logo.png" width="30" height="30"
                         className="d-inline-block align-top" alt=""/>
                    &nbsp; Bookmarks
                </a>
            </nav>
            {data.map((bookmark) => (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{bookmark.name}</h5>
                        <a href={bookmark.location}><h6 className="card-subtitle mb-2 text-muted">{bookmark.location}</h6></a>
                        <p className="card-text">{bookmark.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default App;
