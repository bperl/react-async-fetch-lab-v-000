// create your App component here
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(data => data.json())
        .then(data => {
            let results = data.people.map(person => person.name)
            this.setState({
                people: results
            })
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.people.length ? this.state.people.map(name => <li>{name}</li>) : null}
                </ul>
            </div>
        )
    }
}

export default App;