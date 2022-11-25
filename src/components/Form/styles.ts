import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        marginTop: -26
    },
    input: {
        backgroundColor: '#262626',
        borderColor: '#0D0D0D',
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 1,
        color: '#8C8C8C',
        flex: 1,
        fontSize: 16,
        height: 52,
        marginRight: 4,
        padding: 16
    },
    inputFocus: {
        borderColor: '#5E60CE'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#1E6F9F',
        borderRadius: 8,
        justifyContent: 'center',
        width: 52
    }
});