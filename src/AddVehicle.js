import React,{useState} from "react";
import {View,Text,StyleSheet,TextInput,Button,Keyboard,ScrollView} from "react-native";
import DatePicker ,{getFormatedDate} from "react-native-modern-datepicker";
import connection from "./database/connection";




const AddVehicle = () =>{
    const [v_date,setDate] = useState('');
    const[v_id, setId] = useState(-1);
    const[dates,setDates] =useState([]);
    const [time, setTime] = useState('');
    const[vehicles,setVehicles] = useState([]);
    const [v_licensePlate,setLicensePlate] = useState('');
    const [v_color,setColor] = useState('');
    const [v_brand,setBrand] = useState('');
    const [v_model,setModel] = useState('');
    const [v_information,setInformation] = useState('');
    const [countPasses,setCountPasses] = useState(0);
    const [dialog, setDialog] = useState(false);

    const addVehicle=()=>{
        connection.createTable({});

        const vehicle = {
            
            licensePlate : v_licensePlate,
            color : v_color,
            brand : v_brand,
            model : v_model,
            information : v_information,
            countPasses : 1,
            date : v_date,

        }
        vehicles.push(vehicle);
        connection.create(vehicle);
        Keyboard.dismiss();
        console.log(vehicles);
    }

    return(
        <ScrollView>
        <View>
            
            <Text style={style.header}>Add Vehicle Page</Text>
          
                <View>
                    <DatePicker style={style.dateTime} 
                    onSelectedChange={day => setDate(day)}
                    selected={getFormatedDate(new Date(), 'DD/MM/YYYY')}
                    onTimeChange={selectedTime => setTime(selectedTime)}
                    ></DatePicker>
                </View>
                
      
                <Text>{v_date}::::{time}</Text>
                <TextInput style={style.textInput} placeholder="Enter License Plate" onChangeText={
                    (newText) =>{
                        console.log(newText.length)
                        setLicensePlate(newText)
                    }
                }
                value = {v_licensePlate}  ></TextInput>
                 <TextInput style={style.textInput} placeholder="Enter Color" onChangeText={
                    (newText) =>{
                        console.log(newText.length)
                        setColor(newText)
                    }
                }
                value = {v_color}  ></TextInput>
                <TextInput style={style.textInput} placeholder="Enter Brand" onChangeText={
                    (newText) =>{
                        console.log(newText.length)
                        setBrand(newText)
                    }
                }
                value = {v_brand}  ></TextInput>
               <TextInput style={style.textInput} placeholder="Enter Model" onChangeText={
                (newText) =>{
                    console.log(newText.length)
                    setModel(newText)
                }
            }
            value = {v_model}  ></TextInput>
               <TextInput style={style.textInput} placeholder="Enter Informations"
               onChangeText={
                (newText) =>{
                    console.log(newText.length)
                    setInformation(newText)
                }
                
            }
            value = {v_information}  ></TextInput>
                <Button title="Add Vehicle" style={style.button} onPress={addVehicle}></Button>
                
        </View>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    textInput:{
        margin:15,
        borderColor:"black",
       borderWidth:1
    },
    button:{
        padding:10
    },
    header:{
        fontSize:20,
        margin:20,
        fontWeight:"bold",
        alignSelf:"center"
    },
    dateTime:{
       alignSelf:"center"
    }
});

export default AddVehicle;
