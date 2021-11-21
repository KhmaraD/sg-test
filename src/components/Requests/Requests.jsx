import React, {useEffect, useState} from 'react';
import {getPosts, getPostUserId} from "../api/api";
import style from "./Requests.module.scss"

const Requests = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        setIsLoading(true);
        getPosts()
            .then((response) => {
                setPosts(response);
                setIsLoading(false);
            })
    }, []);

    const getUserPosts = (e) => {
        e.preventDefault();
        const id = e.target[0].value;
        setIsLoading(true);

        getPostUserId({id})
            .then((response) => {
                setPosts(response);
                setIsLoading(false);
            })
        e.target[0].value = '';
    }

    return (
        <>
            <h1>Requests</h1>
            <form onSubmit={getUserPosts}>
                <label htmlFor="id">Введите userId:</label>
                <input type="text" name="id"/>
                <button type="submit">Поиск</button>
            </form>
            <div className={style.postsWrapper}>
                {isLoading
                    ? <h2>Loading....</h2>
                    : posts.map((item) => {
                        return (
                            <div className={style.postItem} key={item.id}>
                                <h3>UserId: {item.userId}</h3>
                                <h4>{item.id}. {item.title}</h4>
                                <p>{item.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Requests;