import axios from "axios";

export const getPosts = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_page=0&_limit=10");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getPostUserId = async ({id}) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
