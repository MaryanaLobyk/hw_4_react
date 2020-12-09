import React, {Component} from 'react';
import UserServices from "../../service/UserServices";
import User from "../user/User";
import './AllUsers.css'


class AllUsers extends Component {

    userServices = new UserServices();
    state = {users: []}

    async componentDidMount() {
       let users = await this.userServices.users();
        this.setState({users})
    }

    render() {
        let {users} = this.state;
        return (
            <div>
                {
                    users.map(user => {
                        return (<User item={user} key={user.id}/>)
                    })
                }
            </div>
        );
    }
}

export default AllUsers;