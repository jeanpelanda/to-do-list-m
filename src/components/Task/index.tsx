import { CheckCircle, Circle, Trash } from "phosphor-react-native";
import { useState } from "react";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface TaskProps {
    isCompleted: boolean,
    content: string,
    onDeleteTask: (task: string) => void;
    onToggleCheck: (task: string) => void;
}

export default function Task({ isCompleted, content, onDeleteTask, onToggleCheck }: TaskProps) {

    function handleDeleteTask() {
        onDeleteTask(content);
    }

    function handleToggleCheck() {
        onToggleCheck(content);
    }

    return (
        <View style={[styles.task, isCompleted && styles.noBorder]}>
            <TouchableOpacity style={styles.taskButton} onPress={handleToggleCheck}>
                {
                    isCompleted ? <CheckCircle size={18} color="#5E60CE" weight='fill' />
                        : <Circle size={18} color="#4EA8DE" />
                }
            </TouchableOpacity>
            <Text style={[styles.taskText, isCompleted && styles.lineThrough]}>{content}</Text>
            <TouchableHighlight
                style={styles.taskDelete}
                onPress={handleDeleteTask}
                underlayColor="#333">
                <Trash size={14} color="#808080" />
            </TouchableHighlight>
        </View>
    )
}