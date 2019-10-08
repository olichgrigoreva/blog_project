import React from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import '../App.css';
import localStorageComponent from "../storage/localStorageComponent.js"
import addPost from "../services/addPost.js"


class App extends React.Component {
    constructor(props) {
        super(props);
        //localStorageComponent.init();
    }

    render() {
        let blog = localStorageComponent.get();

        function show(f_id) {
            {/*комментарий*/
            }
            console.log(f_id);
        }

        function addPost(f_id) {
            console.log(f_id);
        }

        return (
            <div>
                <h1>Home</h1>
                {blog && blog.map(post => (
                    {/*<div onClick={show.bind(this, post.id)}> {post.title}</div>*/},
                        <Link to={"post/" + post.id}>
                            <div>{post.title}</div>
                        </Link>
                ))}
                <Link to={"/create"}>
                    <button>Добавить запись</button>
                </Link>
            </div>
        )
    }
}

export default App;