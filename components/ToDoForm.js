import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import {MaterialIcons} from '@expo/vector-icons';


export default function TaskList({ updateList }) {
    const [text, setText] = useState('');

    const changesHandler = (taskMessage) => {
        setText(taskMessage);
    }
    return (
        <View style={styles.content}>
            <TextInput style={styles.input} placeholder='Enter Task' onChangeText={(value) => changesHandler(value)} />

            <TouchableOpacity onPress={()=> updateList(text)}>
                <MaterialIcons name="add-circle" size={40} color="#3CB371" />
            </TouchableOpacity>

            {/* <Button title="Add Task" color='skyblue' onPress={() => updateList(text) & setText('')} /> */}
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'solid',
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    }

});