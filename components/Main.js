import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button,Image, ImageBackground } from 'react-native';

export default function Main() {
    const [search, setSearch] = useState('');
    const [weathers, setWeathers] = useState(null);
    const [errors, setErrors] = useState('');
    const callApi = () => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+search+'&appid=9fd7a449d055dba26a982a3220f32aa2')
        .then(response=>response.json())
        .then(responseJson => {
           // setIsLoading(false);
            console.log(responseJson);
            setWeathers(responseJson);
        })
        .catch(error=> {
           // setIsLoading(false);
            console.log(error);
        //when it got error jump back to previous
        })
    }
    return (
        <ImageBackground source={require('../assets/night.png')} 
        style={{width:'100%',
        height:'100%'}}>
        <View style={styles.container}>
            <TextInput placeholder="Enter City Name" style={styles.textInput} value={search}
                onChangeText={(value) => setSearch(value)} />
            <Button title="Press Me" onPress={callApi} />
           {
           weathers ?
           <View style={{alignItems:'center'}}>
               <Image
               style={{width:50,height:50}}
               source={{
                   uri: 'https://openweathermap.org/img/wn/'+weathers.weather[0].icon+'@2x.png',
                }}
                />
               <Text style={{fontSize:20}}>{new Date(weathers.dt* 1000).toLocaleDateString()}</Text>
           <Text style={{fontSize:20}}>{(weathers.main.temp-273.15).toFixed(2)} &deg; C</Text>
           <Text>{weathers.weather[0].main}</Text>
           <Text>Humidiy {weathers.main.humidity}</Text>
           <Text>Pressure {weathers.main.pressure}</Text>
           </View>
           : 
           <View/>
           }
        </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        borderColor: 'black',
        height: 40,
        padding: 10
    }
});
