import { Modal, StyleSheet, Text, Pressable, View, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import ButtonOrange from './ButtonOrange';
interface MyComponentProps {
    modalVisible: boolean;
    onPress: () => void;
    Pedidos: any[];
    setPedido: (data: object[]) => void;
}

const ModalEdit = ({ modalVisible, onPress, Pedidos, setPedido }: MyComponentProps) => {
    const originalPedidos = JSON.parse(JSON.stringify(Pedidos))
    const [data, setData] = useState(originalPedidos);

    const decreaseQuantity = (index: number) => {
        if (data[index].qtd > 0) {
            const updatedData = [...data];
            updatedData[index].qtd -= 1;
            // if (updatedData[index].qtd === 0) {
            //     updatedData.splice(index, 1);
            // }
            setData(updatedData);
        }
    };

    const increaseQuantity = (index: number) => {
        const updatedData = [...data];
        updatedData[index].qtd += 1;
        setData(updatedData);
    };

    const resetData = () => {
        setData(originalPedidos);
    }

    const confirmChange = async () => {
        const updatedData = [...data];
        data.map((pedido: any, index: any) => {
            if (pedido.qtd === 0) {
                updatedData.splice(index, 1);
            }
        }
        );
        setData(updatedData);
        setPedido(JSON.parse(JSON.stringify(updatedData)))
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                onPress();
                resetData();
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Editar Pedido</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => { onPress(); resetData(); }}>
                        <AntDesign name="closesquareo" size={30} color="black" />
                    </Pressable>
                    <View style={styles.dataView}>
                        {data.map((pedido: any, index: any) => (
                            <View style={styles.pedidoContainer} key={index}>
                                <Text>{pedido.produto} </Text>
                                <View style={styles.qtdView}>
                                    <TouchableOpacity onPress={() => decreaseQuantity(index)}>
                                        <AntDesign name="minuscircleo" size={20} color="black" />
                                    </TouchableOpacity>
                                    <Text style={styles.qtdNum}>{pedido.qtd}</Text>
                                    <TouchableOpacity onPress={() => increaseQuantity(index)}>
                                        <AntDesign name="pluscircleo" size={20} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={styles.buttonsView}>
                        <ButtonOrange text='Confirmar' onPress={[confirmChange, onPress]} />
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
        borderWidth: 2,
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

export default ModalEdit;