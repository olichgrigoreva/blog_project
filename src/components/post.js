import React from 'react';
import localStorageComponent from "../storage/localStorageComponent.js";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class Post extends React.Component {

    render() {
        let id_post = this.props.match.params.id;
        let posts = localStorageComponent.get("blog");
        let post = posts.find(post => +post.id == +id_post);
        {/*+ преобразование типов*/
        }
        console.dir(posts);
        console.dir(post);
        return (
            <div>
                <h1>Post page</h1>
                <h2>{post.title}</h2>
                <div>{post.date}</div>
                <div>{post.text}</div>
                <Link to={"/create"}>
                    <button>Edit post</button>
                </Link>
            </div>
        )
    }
}
export default Post