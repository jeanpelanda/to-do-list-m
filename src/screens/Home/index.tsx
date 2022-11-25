import { Alert, Text, View } from "react-native";
import Header from "../../components/Header";
import Form from "../../components/Form";
import React, { useState } from "react";
import { styles } from "./styles";
import Task from "../../components/Task";
import { ClipboardText } from "phosphor-react-native";

interface Task {
    content: string,
    isCompleted: boolean
}

export default function Home() {

    const [tasks, setTasks] = useState<Task[]>([]);

    function createTask(content: string) {
        if (tasks.filter(task => task.content === content).length) {
            return Alert.alert("Warning!", 'A task with this description already exists.');
        }
        setTasks([...tasks, { content, isCompleted: false }]);
    }

    function toggleCheck(taskToToggle: string) {
        const updatedTaskList = tasks.map(task => {
            return task.content === taskToToggle ? { ...task, isCompleted: !task.isCompleted } : task
        })
        setTasks(updatedTaskList);
    }

    function deleteTask(taskToDelete: string) {
        const taskWithoutDeleteOne = tasks.filter(task => task.content != taskToDelete);
        setTasks(taskWithoutDeleteOne);
    }

    const createdTasks = tasks.length;

    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <>
            <Header />
            <View style={styles.container}>
                <Form onCreateTask={createTask} />
                <View style={styles.info}>
                    <View style={styles.infoData}>
                        <Text style={[styles.infoText, styles.blue]}>Tasks created</Text>
                        <View style={styles.infoNumber}>
                            <Text style={styles.infoNumberText}>
                                {createdTasks}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.infoData}>
                        <Text style={[styles.infoText, styles.purple]}>Completed</Text>
                        <View style={styles.infoNumber}>
                            <Text style={styles.infoNumberText}>
                                {completedTasks}
                            </Text>
                        </View>
                    </View>
                </View>
                {
                    tasks.length
                        ? tasks.map(task => {
                            return <Task
                                key={task.content}
                                content={task.content}
                                isCompleted={task.isCompleted}
                                onDeleteTask={deleteTask}
                                onToggleCheck={toggleCheck}
                            />
                        })
                        : <View style={styles.empty}>
                            <ClipboardText color="#808080" style={styles.emptyIcon} size={56} />
                            <Text style={[styles.emptyText, styles.textBold]}>You don't have tasks registered yet</Text>
                            <Text style={styles.emptyText}>Create tasks and organize your to-do items</Text>
                        </View>
                }
            </View>
        </>
    )
}