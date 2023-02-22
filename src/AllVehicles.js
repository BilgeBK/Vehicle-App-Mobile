import React, { Component, useState } from "react";
import {View, Text , StyleSheet,ScrollView} from "react-native";
import { Table,Row,Rows,Cols } from "react-native-table-component";
import connection from "./database/connection";

const AllVehicles = ()=>{
  const [data,setData] = useState([]);
  const [tableHead,setTableHead]= useState(['License Plate','Color','Brand','Model','CountPasses'])
  const [tableData,setTableData] = useState([]);

  const getAllVehicles= async()=>{
    const option = {
      columns : 'licensePlate , color , brand , model , countPasses',
      page : 1,
      limit : 30,
      order : 'countPasses ASC'
    };

    var allVehicles = await connection.query(option);

    for(let index = 0 ; index < allVehicles.length; index++){
      const element = allVehicles[index];
      if(data.length != 0){
        console.log('id kontrolü');
        data.push(allVehicles[index]);
          //data.push(`${allVehicles[index].licensePlate}${allVehicles[index].color}${allVehicles[index].brand}${allVehicles[index].model}${allVehicles[index].countPasses}`);  
      }else{
        console.log('else blogu');
       // data.push(`${element.licensePlate}${element.color}${element.brand}${element.model}${element.countPasses}`);
       data.push(element);
      }
    }
    tableData.push(data);
    console.log(data);
    
    

  }

    return (
      getAllVehicles(),
      <View style={styles.container}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
      </Table>
      <ScrollView>
         <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        {
          tableData.map((rowData, index) => {
            <Rows key={index} data={rowData} textStyle={styles.text}/>
            
          })
        }
        </Table>
      </ScrollView>
     
         
       </View>
   );
}

      

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 60, backgroundColor: '#f1f8ff' },
    text: { margin: 6, height:60}
  });

  export default AllVehicles;