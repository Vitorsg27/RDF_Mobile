import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';

interface MyComponentProps {
    modalVisible: boolean;
    onPress: () => void;
    text: string;
}

const App = ({ modalVisible, onPress, text }: MyComponentProps) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                onPress();
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{text}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => onPress()}>
                        <Text style={styles.textStyle}> X </Text>
                    </Pressable>
                    <View>
                        <Text style={styles.subtitle}>Pedidos</Text>
                        <Pressable></Pressable>
                        <Text>AA</Text>
                    </View>
                    <View style={styles.line} />
                    <View>
                        <Text style={styles.subtitle}>Comanda</Text>
                        <Pressable></Pressable>
                        <Text>AA</Text>
                    </View>
                    <View style={styles.line} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        minWidth: 400,
        margin: 20,
        backgroundColor: '#e2e2e2',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#e2e2e2',
        borderColor: 'black',
        padding: 5,
        zIndex: 1,
    },
    textStyle: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: 30,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 30,
        marginBottom: 15,
        textAlign: 'center',
    },
    line: {
        width: 300,
        borderBottomWidth: 3,
        borderBottomColor: 'black',
        marginBottom: 8,
        marginTop: 8,
    },
});

export default App;