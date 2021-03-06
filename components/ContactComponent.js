import React, { Component } from 'react';
import {ScrollView, TouchableHighlightBase} from 'react-native';
import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={          
        };
    }

    static navigationOptions = {
        title: 'Contact Us',
    };

    render(){
        return(
            <ScrollView>
            <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
            <Card wrapperStyle={{margin:20}}>
                <Text>1 Nucamp Way</Text>
                <Text>Seattle,WA 98001</Text>
                <Text style={{marginBottom: 10}}>U.S.A</Text>
                <Text>Phone: 1-206-555-1234</Text>
                <Text>Email: campsite@nucamp.com</Text>
                </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default Contact;
