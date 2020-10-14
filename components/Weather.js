import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// Creating React using class component

export default class Weather extends React.Component {

    // React Component vs Stateless
    // 1) The return will be under render method
    // 2) When calling method, you will use this
    // 3) To create state, you will create inside constructor
    // 4) to modify state you will use this.setState
    // 5) To hget value from state you will use this.state.xx
    constructor(){
        super();
        this.state = {
            search:'',
            weathers:[],
            errors:''
        }
    }
    render(){
        return (
            <View style={{flex: 1,backgroundColor: '#fff'}}>
                <TextInput placeholder="Enter City Name" style={ {borderColor: 'black',height: 40,padding: 10}} 
                value={this.state.search}
                    onChangeText={(value) => setState({search:value})} />
                <Button title="Press Me" onPress={this.callApi} />
            </View>
        );
    }


    callApi(){
        let url = "https://api.openweathermap.org/data/2.5/weather?q=Kuala%20Lumpur&appid=9fd7a449d055dba26a982a3220f32aa2"
        fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(data => {
            // Create and append the li's to the ul
            console.log(data)
            this.setState({weathers:data})
        }
        )
    }
}