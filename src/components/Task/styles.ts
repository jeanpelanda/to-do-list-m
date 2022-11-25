import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    task: {
        alignItems: 'center',
        backgroundColor: '#262626',
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        padding: 12
    },
    noBorder: {
        borderColor: '#262626'
    },
    taskText: {
        color: '#E1E1E6',
        flex: 1,
        fontSize: 14,
    },
    lineThrough: {
        color: '#808080',
        textDecorationLine: 'line-through'
    },
    taskButton: {
        marginRight: 8
    },
    taskDelete: {
        alignItems: 'center',
        backgroundColor: '#262626',
        borderRadius: 4,
        height: 32,
        justifyContent: 'center',
        marginLeft: 8,
        width: 32
    }
});