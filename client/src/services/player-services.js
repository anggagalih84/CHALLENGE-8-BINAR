import axios from "axios";

export const getPlayers = async() => {
    try {
        const res = await axios.get("http://localhost:4000/api/v1/players");

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getPlayerById = async(id) => {
    try {
        const res = await axios.get(`http://localhost:4000/api/v1/players/${id}`);
        console.log("resss", res);

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const postPlayer = async(username, email, password) => {
    try {
        await axios.post("http://localhost:4000/api/v1/players", {
            username,
            email,
            password,
        });
    } catch (error) {
        console.log(error);
    }
};
export const editPlayer = async(
    id,
    username,
    email,
    password,
    experience,
    level
) => {
    try {
        await axios.put(`http://localhost:4000/api/v1/players/${id}`, {
            username,
            email,
            password,
            experience,
            lvl: level,
        });
    } catch (error) {
        console.log(error);
    }
};

export const deletePlayer = async(id) => {
    try {
        await axios.delete(`http://localhost:4000/api/v1/players/${id}`);
    } catch (error) {
        console.log(error);
    }
};