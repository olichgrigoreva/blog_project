import "../App.css";

export default class localStorageComponent {
    static init(){
        let blog1 =
            {
                id: "1",
                title: "test",
                text: "hello",
                date: "2019-07-12"
            };

        let blog2 =
            {
                id: "2",
                title: "test",
                text: "hello",
                date: "2019-07-12"
            };

        let blog3 =
            {
                id: "3",
                title: "test",
                text: "hello",
                date: "2019-07-12"
            };

        let blog = [blog1, blog2, blog3];
        localStorageComponent.set(blog);
    }

    static set(blog_set){
        localStorage.setItem("blog", JSON.stringify(blog_set));
    }

    static get(){
        return JSON.parse(localStorage.getItem("blog"));
    }
}