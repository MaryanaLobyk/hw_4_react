import React, {Component} from 'react';
import CommentServices from "../../service/CommentServices";
import Comment from "../comment/Comment";

class AllComments extends Component {

    commentServices = new CommentServices();
    state = {comments: []}

    async componentDidMount() {
        let comments = await this.commentServices.comments();
        this.setState({comments})
    }

    render() {
        let {comments} = this.state;
        return (
            <div>
                {
                    comments.map(comment => {
                        return (<Comment item={comment} key={comment.id}/>)
                    })
                }
            </div>
        );
    }
}

export default AllComments;