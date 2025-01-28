import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AllItems = () => {
    return (
        <View>
            <View style={styles.headingConatiner}>
                <Text>Items</Text>
                <Text>Quantity</Text>
            </View>
        </View>
    );
};

export default AllItems;

const styles = StyleSheet.create({
    headingConatiner:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
    }
});
