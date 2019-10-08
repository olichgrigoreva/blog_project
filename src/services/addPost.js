import React from 'react'
import App from "../components/App.js";
import localStorageComponent from "../storage/localStorageComponent.js"

class AddPost extends React.Component {
    addPost() {
        let posts = localStorageComponent.get("blog");
        let post = {
            id: this.id.value,
            title: this.title.value,
            text: this.text.value,
            date: this.date.value
        }
        posts.push(post);
        localStorageComponent.set(posts);
        console.log(posts);
    }

    render() {

        return (
            <div>
                <h2>Add Post</h2>
                <input ref={el => this.id = el}/>
                <input ref={el => this.title = el}/>
                <input ref={el => this.text = el}/>
                <input ref={el => this.date = el}/>
                <button onClick = {this.addPost.bind(this)} className="btn">Save post</button>
            </div>
        )
    }
}
export default AddPost
