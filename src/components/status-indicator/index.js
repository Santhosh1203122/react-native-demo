import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import {Status} from '../../Constants';

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
        height: 'fit-content'
    },
    indicator: {
        borderRadius: 2,
        padding: 5,
        width: 'fit-content',
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