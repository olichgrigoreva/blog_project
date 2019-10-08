import localStorageComponent from "../storage/localStorageComponent.js";

class Post {
    get (id) {
        let id_post = this.props.match.params.id;
        let posts = localStorageComponent.get("blog");
        let post = posts.find(post => +post.id == +id_post);
        console.dir(posts);
        console.dir(post);
        return post;
    }
}