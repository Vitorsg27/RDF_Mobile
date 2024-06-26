import { Modal, StyleSheet, Text, Pressable, View, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import PedidosComponent from './PedidosComponent';
import ComandaComponent from './ComandaComponent';
import ButtonOrange from './ButtonOrange';
import ModalEdit from './ModalEdit';

interface MyComponentProps {
    modalVisible: boolean;
    onPress: () => void;
    text: string;
}

const App = ({ modalVisible, onPress, text }: MyComponentProps) => {
    const Pedidos = [
        { produto: "Batata Frita", qtd: 2 },
        { produto: "Refrigerante", qtd: 3 },
        { produto: "Pastel", qtd: 1 },
    ];
    const [pedidos, setPedidos] = useState(Pedidos);
    const updatePedido = (newPedidos: any) => {
        setPedidos(newPedidos);
    }

    const Comanda = [
        { produto: "Porção Calabreza", qtd: 3, preco: 20 },
        { produto: "Refrigerante", qtd: 5, preco: 4 },
        { produto: "Pastel", qtd: 2, preco: 3 },
        { produto: "Cerveja", qtd: 9, preco: 9 },
    ];
    const [comanda, setComanda] = useState(Comanda);
    const updateComanda = (newComanda: any) => {
        setComanda(newComanda);
    }

    const [modalEditPedidoVisible, setModalPedidoVisible] = useState(false);
    const onPressEditPedido = () => {
        setModalPedidoVisible(!modalEditPedidoVisible);
    }
    const [modalEditComandaVisible, setModalComandaVisible] = useState(false);
    const onPressEditComanda = () => {
        setModalComandaVisible(!modalEditComandaVisible);
    }

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
                        <AntDesign name="closesquareo" size={30} color="black" />
                    </Pressable>
                    <View style={styles.pedidos}>
                        <View style={styles.subtitleView}>
                            <Text style={styles.subtitle}>Pedido</Text>
                            <TouchableOpacity onPress={() => { onPressEditPedido(); }}>
                                <MaterialCommunityIcons name="square-edit-outline" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        <PedidosComponent Pedidos={pedidos} />
                        <View style={styles.pedidosButtons}>
                            <ButtonOrange text='Entregue' />
                            <ButtonOrange text='Cancelar' />
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.pedidos}>
                        <View style={styles.subtitleView}>
                            <Text style={styles.subtitle}>Comanda</Text>
                            <TouchableOpacity onPress={onPressEditComanda}>
                                <MaterialCommunityIcons name="square-edit-outline" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        <ComandaComponent Comanda={comanda} />
                    </View>
                    <View style={styles.line} />
                    <View style={styles.pedidosButtons}>
                        <ButtonOrange text='Finalizar Comanda' />
                    </View>
                </View>
            </View>
            <ModalEdit modalVisible={modalEditPedidoVisible} onPress={onPressEditPedido} Pedidos={pedidos} setPedido={updatePedido} />
            <ModalEdit modalVisible={modalEditComandaVisible} onPress={onPressEditComanda} Pedidos={comanda} setPedido={updateComanda} />
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
    pedidos: {
        minWidth: '80%',
    },
    pedidosButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    modalText: {
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: 30,
        textAlign: 'center',
    },
    subtitleView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 30,
        marginBottom: 5,
        marginRight: 5,
    },
    line: {
        minWidth: '80%',
        borderBottomWidth: 3,
        borderBottomColor: 'black',
        marginBottom: 8,
        marginTop: 8,
    },
});

export default App;