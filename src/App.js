import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import {robots} from './robots'

class App extends Component {

    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        console.log(event);
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    }

    render () {
        return (
        <div className="tc">
            <h1>Robot friends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <CardList robots={this.state.robots} />
        </div>
        )
        
    } 
}

export default App;
