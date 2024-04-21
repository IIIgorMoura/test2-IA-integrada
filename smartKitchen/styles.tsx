import { StyleSheet, Platform, StatusBar } from 'react-native';

const alturaStatusBar = StatusBar.currentHeight;

const ESTILOS = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        alignItems: 'center',
    },
    containerBotoes: {
        flex: 1,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
        paddingTop: Platform.OS === 'android' ? alturaStatusBar : 54
    },
    button: {
        backgroundColor: '#FF5656',
        width: '90%',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 14,
        color: '#fff',
    },
    form: {
        backgroundColor: '#000',
        width: '90%',
        borderRadius: 8,
        borderColor: "#fff",
        borderWidth: 1,
        padding: 16,
        marginTop: 16,
        marginBottom: 8,
      },
      label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
        color: "#fff",
      },
      input: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#94a3b8',
        padding: 8,
        fontSize: 16,
        marginBottom: 16,
        color: "#fff",
      },
      content: {
        backgroundColor: '#FFF',
        padding: 16,
        width: '100%',
        marginTop: 16,
        borderRadius: 8,
      },
      containerScroll: {
        width: '90%',
        marginTop: 8,
      }
});
export default ESTILOS;