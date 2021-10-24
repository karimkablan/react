import React, { Component } from 'react'
import {data} from './data'
import Name from './Name'



export default class DataMassaging extends Component {
    constructor(props){
        super(props)
        this.state = {
            namesArray: [],
            peopleArray: []
        }
    }

    getNamesfromData = () => {
        return data.map(person => {
            return person.name;
        })
    }
    getPeopleBornBefore1990 = () => {
        return data.filter(person => {
            if(person.birthday.slice(-4) < 1990)
            return person;
        })
    }
    componentDidMount = () => {
        this.setState({
            namesArray: this.getNamesfromData(),
            peopleArray: this.getPeopleBornBefore1990()
        })
    }
    render() {
        return (
            <div>
                <div id='names'>
                   The Names:
                     {this.state.namesArray.map(item => {
                        return <Name name={item} />
                    })}
                </div> <br/><br/>
                <div id='before1990'>
                 before 1990:<br/><br/>
                    {this.state.peopleArray.map(item => {
                        return <div>
                            <Name name={item.name} />
                            <div>Birthday={item.birthday}</div>
                            <div>Favorite Foods:
                                <ul>Meats:
                                    {item.favoriteFoods.meats.map(food=> {
                                        return <li>{food}</li>
                                    })}
                                </ul>
                                <ul>Fish:
                                    {item.favoriteFoods.fish.map(food=> {
                                        return <li>{food}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}