import axios from "axios";

// export const fetchUserData = async (username) => {
//     const response = await axios.get(`https://api.github.com/users/${username}`);
//     return response.data;
// };

export const fetchAdvancedUsers = async (username, location, minRepos) => {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `Location: ${location}`;
    if (minRepos) query += `Minimum repositories: >=${minRepos}`

    const searchResponse = await axios.get(
        `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );

    const users = searchResponse.data.items;

    const detailedUsers = await Promise.all(
        users.map(async (user) => {
            const detailResponse = await axios.get(user.url);
            return detailResponse.data;
        })
    );

    return detailedUsers;
};