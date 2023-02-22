
import { View,Text, StyleSheet,TouchableOpacity} from "react-native";
const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
     
       
          <View style={{marginTop:260,flexDirection:'row',alignSelf:'center'}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('CalendarAllVehicles')} style={{marginRight:100}}>       
       
            <Text style={{alignSelf:"center"}}>All Vehicles</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate('AddVehicle')}> 
            
            <Text style={{alignSelf:"center"}}>Add New Vehicle</Text>
    </TouchableOpacity>
   
        </View>
        <View style={{marginTop:50,flexDirection:'row',alignSelf:'center'}} >
        <TouchableOpacity onPress={() => props.navigation.navigate('SearchVehicle')}> 
        <Text style={{alignSelf:"center"}}>Search Vehicle</Text>
</TouchableOpacity>
        </View>
    </View>
  )    
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      image: {
        flex: 1,
        justifyContent: "center"
      },
      taskContainer: {
        marginTop: 15,
      },
      heading:{
        marginBottom:90,
        fontSize:20,
        fontWeight:'bold',
        fontStyle:'italic',
        alignSelf:'center',
      },
      icon:{
          fontSize:50,
          color:'#0099CC',
          margin:10,
          alignSelf:'center'
      }
});

export default HomeScreen;
