import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import db from '../config';
import firebase from'firebase';

export default class UserSignUpScreen extends Component{

    constructor(){
        super();
        this.state={
            emailId:'',
            password:''
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        Healthician
                    </Text>
                </View>
                <View>
                    <TextInput
                      style={styles.loginBox}
                      placeholder='abc@example.com'
                      keyboardType='email-address'
                      onChangeText={(text)=>{
                          this.setState({
                              emailId:text
                          })
                      }}/>

                    <TextInput
                      style={styles.loginBox}
                      placeholder='Password'
                      secureTextEntry={true}
                      onChangeText={(text)=>{
                          this.setState({
                              password:text
                          })
                      }}/>

                      <TouchableOpacity
                        style={[styles.button],{marginBottom:20,marginTop:20,paddingLeft:125}}>
                            <Text style={styles.buttonText}>
                                Login
                            </Text>
                      </TouchableOpacity>
                        
                      <TouchableOpacity
                        style={styles.button}>
                            <Text style={styles.buttonText}>
                                Sign Up
                            </Text>
                      </TouchableOpacity>
                        
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ADD8E6'
    },
    title:{
        fontSize:65,
        fontWeight:"300",
        paddingTop:50,
        color:'#ff3d00',
        paddingLeft:10
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:'#ff9800',
        shadowColor:'#0000',
        shadowOffset:{
            width:0,
            height:0
        },
        shadowOpacity:0.30,
        shadowRadius:10.32,
        elevation:16
    },
    loginBox:{
        width:300,
        height:50,
        borderBottomWidth:1.5,
        borderColor:'#ff8a65',
        fontSize:20,
        margin:10,
        paddingLeft:50
    },
    buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
    }
})