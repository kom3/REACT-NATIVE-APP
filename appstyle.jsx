import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 24,
    },
    red: {
        color: 'red',
    },
    smfont: {
        fontSize: 16
    },
    scrollView: {
        backgroundColor: '#ffffff',
        marginHorizontal: 5,
    },
    text: {
        fontSize: 18,
    },
    blocks: {
        minHeight: 100,
        borderRadius: 12,
        margin: 8,
        backgroundColor: '#0d7d07',
        padding: 10,

    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
    },
    serachbar: {
        // marginVertical: 8,
        // marginHorizontal: 16,
        padding:10,
        height: 40,
        width:348,
        borderColor:'#ffffff'
    },
    flexdisplay: {
        flex: 1,
        marginVertical: 8,
        marginHorizontal: 10,
        padding:2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth:0.5,
        backgroundColor:'#f2f2f2',
        borderRadius:50,
        borderColor:'#ffffff'
    }
});


export default styles