import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Tasks({ item, removeTask }) {
    return (
        <TouchableOpacity onPress={() => removeTask(item.taskId)}>
		<View style={styles.item}>
		<MaterialIcons name='delete' size={20} color='white'/>
		</View>
            <Text style={styles.text}>{item.taskName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 8,
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 14,
        borderStyle: 'solid',
		flexDirection: 'row',
    },
});