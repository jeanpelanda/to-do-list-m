import { PlusCircle } from "phosphor-react-native";
import React, { useState } from "react";
import { Alert, TextInput, TouchableHighlight, View } from "react-native";
import { styles } from "./styles";

interface FormProps {
    onCreateTask: (content: string) => void
}

export default function Form({ onCreateTask }: FormProps) {

    const [newTaskText, setNewTaskText] = useState('');

    const [inputFocus, setInputFocus] = useState(false);

    function handleCreateNewTask() {
        if (!newTaskText.trim()) {
            return Alert.alert("Warning!", 'Add a name to your new task.');
        }
        onCreateTask(newTaskText);
        setNewTaskText('');
    }

    return (
        <View style={styles.form}>
            <TextInput
                style={[styles.input, inputFocus && styles.inputFocus]}
                placeholder="Enter a new task"
                placeholderTextColor="#666"
                onChangeText={setNewTaskText}
                value={newTaskText}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
            />
            <TouchableHighlight style={styles.button} onPress={handleCreateNewTask} underlayColor="#4EA8DE">
                <PlusCircle size={16} color="#FFF" />
            </TouchableHighlight>
        </View>
    )
}