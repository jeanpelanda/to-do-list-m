import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        paddingRight: 24
    },
    empty: {
        alignItems: 'center',
        borderTopColor: '#333',
        borderTopWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 48
    },
    emptyIcon: {
        marginBottom: 16
    },
    emptyText: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center'
    },
    textBold: {
        fontWeight: 'bold'
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
        paddingTop: 32,
        width: '100%'
    },
    infoData: {
        flexDirection: 'row',
    },
    infoText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    blue: {
        color: '#4EA8DE'
    },
    purple: {
        color: '#8284FA'
    },
    infoNumber: {
        backgroundColor: '#333',
        borderRadius: 10,
        marginLeft: 8,
        paddingHorizontal: 8,
        paddingVertical: 2
    },
    infoNumberText: {
        color: '#D9D9D9',
        fontSize: 12,
        fontWeight: 'bold'
    }
});