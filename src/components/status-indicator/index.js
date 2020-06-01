import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import {Status} from '../../Constants';


/* 
    StatusIndicator is uesed to display the status of the task and the count of task completed
        - First Indicator will have the status of the task ie TODO, In Progress etc
            - Background colour changes according to the the status this data is fetched from the constants         
        - Second Indicator will contain the no of task completed alon with the total no of tasks 
    
    Props:
        1. statusId - status id of the particular task with will we can fetch the color and display name of the status
        2. completed - total no of task completed
        3. total -  total no of tasks
    
    Return: 
        Will be returning 2 small cards which will be holding 50% width of the card
*/

function StatusIndicator(props) {
    const statusData = Status[props.statusId];
    return (
        <View style={styles.holder}>
            <View style={[styles.indicator, {backgroundColor: statusData.bgColor}]}>
                <Text style={[styles.text, {color: statusData.textColor}]}>{statusData.displayName}</Text>
            </View>
            {props.total && <View style={[styles.indicator, styles.values]}>
                <Text style={styles.text}>{props.completed + '/' + props.total}</Text>
            </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    holder: {
        flex: 1,
        flexDirection: 'row',
        height: 25
    },
    indicator: {
        borderRadius: 2,
        padding: 5,
    },
    text: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    values: {
        backgroundColor: '#e7e7e9',
        marginLeft: 10
    }
})

export default StatusIndicator;