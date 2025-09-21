import React, { useState } from "react";
import { fetchUserData } from "../services/githubService.js";

function Search() {
    const [query, setQuery] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setUser(null);
        setError("");

        try {
            const data = await fetchUserData(query);
            setUser(data); 
        } catch {
            setError("Looks like we can't find the user");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter GitHub username" value={query} 
                onChange={(e) => setQuery(e.target.value)} />
                <button type="submit" style={{ }}>Search</button> 
            </form>

            {/* Conditional Rendering */}
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red"}}>{error}</p>}
            {user && (
                <div style={{ marginTop: "2rem" }}>
                    <img src={user.avatar_url} alt={user.login} width="100" />
                    <h2>{user.name || user.login}</h2>
                    <p>{user.bio}</p>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;
