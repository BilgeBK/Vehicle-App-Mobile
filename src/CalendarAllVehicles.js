import React,{useState} from "react";
import {Text,View,StyleSheet,ScrollView,FlatList, TextInput, Button} from "react-native";
import DatePicker ,{getFormatedDate} from "react-native-modern-datepicker";
import connection from "./database/connection";
import VehicleCard from "./VehicleCard";
import Dialog,{DialogTitle, DialogContent, DialogFooter, DialogButton} from "react-native-popup-dialog";

const CalendarAllVehicles = (props) =>{
    const [v_date,setDate] = useState('');
    const [data,setData] = useState([]);
    const [v_view,setView] = useState([]);
    const [v_licensePlate,setLicensePlate] = useState('');
    const [v_brand, setBrand] = useState('');
    const [v_model, setModel] = useState('');
    const [v_color, setColor] = useState('');
    const [v_information, setInformation] = useState('');
    const [dialog, setDialog] = useState(false);
    const [updateDialog, setUpdateDialog] = useState(false);
 
    const viewVehicle = async(id) =>{
      setDialog(true);
      var vehicle = await connection.find(id);
      v_view.push(vehicle);
      console.log(v_view);
      setLicensePlate(vehicle.licensePlate);
      setColor(vehicle.color);
      setBrand(vehicle.brand);
      setModel(vehicle.model);
      setInformation(vehicle.information);
      
     
    }
    const updateVehicle=async(licensePlate,color,brand,model,information)=>{
      const props = {
        id : v_view[0].id,
        licensePlate : licensePlate,
        color : color,
        brand : brand,
        model : model,
        information : information
      }
      var update = await connection.update(props);
      console.log(update);

      setLicensePlate('');
      setColor('');
      setBrand('');
      setModel('');
      etInformation('');
    }

    const getAllVehicles= async()=>{
        const option = {
          columns : 'id, licensePlate , color , brand , model , countPasses, date',
          page : 1,
          limit : 30,
          order : 'countPasses ASC'
        };
    
        var allVehicles = await connection.query(option);
    
        for(let index = 0 ; index < allVehicles.length; index++){
          const element = allVehicles[index];
          if(data.length != 0){
            console.log('id kontrolü');
            if(!data.find(elem => elem.id == allVehicles[index].id)){
              data.push(allVehicles[index]);  
            }     
              //data.push(`${allVehicles[index].licensePlate}${allVehicles[index].color}${allVehicles[index].brand}${allVehicles[index].model}${allVehicles[index].countPasses}`);  
          }else{
            console.log('else blogu');
           // data.push(`${element.licensePlate}${element.color}${element.brand}${element.model}${element.countPasses}`);
           data.push(element);
          }
        }
    
        console.log(data);
        console.log(v_date);  
        
    
      }

      

    return(
        getAllVehicles(),
        <ScrollView>
             <View>
             <DatePicker
              onSelectedChange={day=>{
                setDate(day);
                  
              }}
             ></DatePicker>
             <Dialog
              onDismiss={()=>{
                setDialog(false);
                setLicensePlate('');
                setColor('');
                setBrand('');
                setModel('');
                setInformation('');
                setView([]);
              }}
              width={0.9}
              visible={dialog}
              rounded
              dialogTitle={
                <DialogTitle
                  title="Vehicle Details"
                  hasTitleBar= {false}
                  align="left"
                ></DialogTitle>
              }
              footer={
                <DialogFooter>
                  <DialogButton
                    text="CANCEL"
                    bordered
                    onPress={() =>{
                      setDialog(false);
                      setLicensePlate('');
                      setColor('');
                      setBrand('');
                      setModel('');
                      setInformation('');
                      setView([]);
                    }}
                    key="button-1"
                  ></DialogButton>
                  <DialogButton
                    text="UPDATE"
                    bordered
                    onPress={() => {
                      setDialog(true);
                      setUpdateDialog(true);
                     
                    }}
                  >
                 
                  </DialogButton>
                </DialogFooter>
              }
              
             >
             <DialogContent>
              <Text>License Plate : {v_licensePlate} </Text>
              <Text>Color : {v_color}</Text>
              <Text>Brand : {v_brand}</Text>
              <Text>Model : {v_model}</Text>
              <Text>Information : {v_information}</Text>
              </DialogContent>
             </Dialog>
             <Dialog
                onDismiss={()=>{
                  setUpdateDialog(false);
                  
                }}
                width={0.9}
                visible={updateDialog}
                rounded
                dialogTitle={
                  <DialogTitle
                    title="Update Vehicle"
                    hasTitleBar={false}
                    align="center"
                  ></DialogTitle>
                }
                footer={
                  <DialogFooter>
                    <DialogButton
                      text="SAVE"
                      bordered
                      onPress={()=>{
                        setUpdateDialog(false);
                        updateVehicle(v_licensePlate,v_color,v_brand,v_model,v_information);
                        getAllVehicles();
                      }}
                      key="button-1"
                    ></DialogButton>
                    <DialogButton
                      text="CANCEL"
                      bordered
                      onPress={()=>{
                        setUpdateDialog(false);
                      }}
                      key="button-2"
                    ></DialogButton>
                  </DialogFooter>
                }
             >
             <DialogContent>
                <Text style = {{fontWeight:'bold'}} >License Plate : </Text>
                <TextInput  
                  onChangeText={
                    (newText) =>{ 
                      setLicensePlate(newText)
                    }
                  }
             value = {v_licensePlate}></TextInput>
             <Button title=""></Button>
             </DialogContent>
             </Dialog>
             <Dialog
                onDismiss={()=>{
                  setUpdateDialog(false);
                  
                }}
                width={0.9}
                visible={updateDialog}
                rounded
                dialogTitle={
                  <DialogTitle
                    title="Update Vehicle"
                    hasTitleBar={false}
                    align="center"
                  ></DialogTitle>
                }
                footer={
                  <DialogFooter>
                    <DialogButton
                      text="SAVE"
                      bordered
                      onPress={()=>{
                        setUpdateDialog(false);
                        updateVehicle(v_licensePlate,v_color,v_brand,v_model,v_information);
                        getAllVehicles();
                      }}
                      key="button-1"
                    ></DialogButton>
                    <DialogButton
                      text="CANCEL"
                      bordered
                      onPress={()=>{
                        setUpdateDialog(false);
                      }}
                      key="button-2"
                    ></DialogButton>
                  </DialogFooter>
                }
             >
             <DialogContent>
                <Text style = {{fontWeight:'bold'}} >License Plate : </Text>
                <TextInput  
                  onChangeText={
                    (newText) =>{ 
                      setLicensePlate(newText)
                    }
                  }
             value = {v_licensePlate}></TextInput>
             <Text style = {{fontWeight:'bold'}} > Color: </Text>
                <TextInput  
                  onChangeText={
                    (newText) =>{ 
                      setColor(newText)
                    }
                  }
             value = {v_color}></TextInput>
             <Text style = {{fontWeight:'bold'}} >Brand : </Text>
                <TextInput  
                  onChangeText={
                    (newText) =>{ 
                      setBrand(newText)
                    }
                  }
             value = {v_brand}></TextInput>
             <Text style = {{fontWeight:'bold'}} >Model : </Text>
                <TextInput  
                  onChangeText={
                    (newText) =>{ 
                      setModel(newText)
                    }
                  }
             value = {v_model}></TextInput>
             <Button title="Increment"></Button>
             </DialogContent>
             </Dialog>
             <ScrollView>
            {
              data.map((object)=>{
                return(
                  <View key={object.id} style={style.taskContainer}>
                   <VehicleCard id={object.id} licensePlate = {object.licensePlate} view={()=>viewVehicle(object.id)} />
                  </View>
                )
              })
              
            }
             </ScrollView>
                </View>
        </ScrollView>
    )
};

const style = StyleSheet.create({
  taskContainer: {
    marginTop: 15,
  },
});

export default CalendarAllVehicles;