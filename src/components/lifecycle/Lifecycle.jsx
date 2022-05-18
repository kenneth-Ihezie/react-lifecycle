import axios from "axios";
import React, { Component } from "react";

class LifeCycle extends Component {
    BASEURL = 'https://api.github.com/users'

    constructor(props) {
        super(props)
        console.log(props.text);
        console.log('Construtor');
    }


    componentDidMount(){
        this.apiCallWithFetch()
        this.apiCallWithAxiosGet()
        console.log('ComponentDidMount');
    }

    componentDidUpdate(){
        console.log('ComponentDidUpdate');
    }

    componentWillMount(){
        console.log('ComponentWillMount');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextProps.text != this.props.text
    }

    render(){
        console.log('render');
        return(
            <div>
                <h3>LIFECYCLE COMPONENT</h3>
                { this.props.text }
            </div>
        )
    }


    /*
    axios.request(config)
    axios.get(url, config)
    axios.delete(url, config)
    axios.head(url, config)
    axios.options(url, config)
    axios.post(url, data, config)
    axios.put(url, data, config)
    axios.patch(url, data, config)
    */
    apiCallWithFetch(){
        const apiUrl = this.BASEURL + '/hacktivist123/repos';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => console.log('This is your data', data))
    }

    async apiCallWithAxiosGet(){
        const apiUrl = this.BASEURL + '/hacktivist123';
        const response = await axios.get(apiUrl)
        console.log(response);
    }

    async apiCallWithAxiosPost(){
        const apiUrl = this.BASEURL + '/signup'
        await axios.post(apiUrl, {
            firstName: 'Kenneth',
            lastName: 'Ihezie'
        })
    }

    async multipleCallWithAxios(){
        axios.all([
            axios.get(this.BASEURL + '/hacktivist123'),
            axios.get(this.BASEURL + '/adenekan41')
          ])
          .then(response => {
            console.log('Date created: ', response[0].data.created_at);
            console.log('Date created: ', response[1].data.created_at);
          });
          
    }
}

//Lifecycle call procedure.
/*
Don't call setState in lifecycle methods
The class construtor is first called making a good place to initialize state.
Then the render method is called.
Then react updates the DOM
Then the componentDidMount method will be called. You can now make api calls etc
Anytime the state is updated the componentDidUpdate
*/
export default LifeCycle