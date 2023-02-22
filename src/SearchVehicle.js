import React,{useState} from "react";
import {View,Text,StyleSheet,TextInput,Button} from "react-native";

const SearchVehicle= () =>{
   
  
    return(
        <View>
            <Text>Search Vehicle Page</Text>
            <TextInput placeholder="Enter search" onChangeText={(newText)=>{
                setWord(newText);
                console.log(newText);
            }}></TextInput>
            <Button title="Search"></Button>
        </View>
    );
};

const style = StyleSheet.create({});

export default SearchVehicle;

