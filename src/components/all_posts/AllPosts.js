import React, {Component} from 'react';
import PostServices from "../../service/PostServices";
import Post from "../post/Post";

class AllPosts extends Component {

    postServices = new PostServices();
    state = {posts: []};

    async componentDidMount() {
        let posts = await this.postServices.posts()
        this.setState({posts})
    }

    render() {
        let {posts} = this.state;
        return (
            <div>
                {
                    posts.map(post => {
                        return (<Post item={post} key={post.id}/>)
                    })
                }
            </div>
        );
    }
}

export default AllPosts;