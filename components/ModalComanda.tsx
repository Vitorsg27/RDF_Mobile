import { Modal, StyleSheet, Text, Pressable, View, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import ButtonOrange from './ButtonOrange';
import { Comanda } from './ComandaComponent';

interface MyComponentProps {
    modalVisible: boolean;
    onPress: () => void;
    array: object[];
}

const ModalComanda = ({ modalVisible, onPress, array }: MyComponentProps) => {
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
                    <Text style={styles.modalText}>Editar Comanda</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => onPress()}>
                        <AntDesign name="closesquareo" size={30} color="black" />
                    </Pressable>
                    <View style={styles.dataView}>
                        {Comanda.map((pedido, index) => (
                            <View style={styles.pedidoContainer} key={index}>
                                <Text>{pedido.produto} </Text>
                                <View style={styles.qtdView}>
                                    <TouchableOpacity>
                                        <AntDesign name="pluscircleo" size={20} color="black" />
                                    </TouchableOpacity>
                                    <Text style={styles.qtdNum}>{pedido.qtd}</Text>
                                    <TouchableOpacity>
                                        <AntDesign name="minuscircleo" size={20} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={styles.buttonsView}>
                        <ButtonOrange text='Confirmar' />
                    </View>
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
    },
    modalView: {
        minWidth: 350,
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
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    dataView: {
        minWidth: '80%',
    },
    pedidoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        backgroundColor: '#e2e2e2',
    },
    qtdView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    qtdNum: {
        marginHorizontal: 10
    }
});

export default ModalComanda;