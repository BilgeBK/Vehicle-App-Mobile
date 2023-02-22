import React from "react";
import { StyleSheet,Text, View,TouchableOpacity } from "react-native";

export default VehicleCard = (props) =>{
    return(
        <View style={styles.taskContainer} >
            <Text  style={styles.task} >{props.licensePlate}</Text>
            <TouchableOpacity onPress={()=>props.view(props.id)}>
                <Text>View</Text>
            </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    taskContainer: {
        backgroundColor: '#0099CC',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 5,
        minHeight: 50,
    },
    task: {
        color: 'black',
        width: '90%',
        fontSize: 16,
    },
    delete: {
        marginLeft: 7,
    },
    update: {
        marginRight:2 ,
    },
});
