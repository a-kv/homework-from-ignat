import React from 'react';
import './App.css';
import Name from "./Components/Name/Name";
import Qualities from "./Components/Qualities/Qualities";

import {render} from "react-dom";


class App extends React.Component {
    qualityItems = [
        {id: 1, quality: 'Полководец'},
        {id: 2, quality: 'Тракторист'},
        {id: 3, quality: 'Артист'}];


    // qualityItem = props.qualityItem;
    qualityItem = 'Тракторист';
    render = () => {
        function UserList(props) {
            const users = props.users;
            const items = users.map((user) => <li>{user}</li>);
            return (<ul>{items}</ul>)
        }

        return (
            <div className="App">
                <Name/>
                <Qualities qualityItems={this.qualityItems}/>
            </div>
        );
    }
}

export default App;
