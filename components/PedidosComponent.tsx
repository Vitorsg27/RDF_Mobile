import { View } from "./Themed";
import { StyleSheet, Text } from 'react-native';

export const Pedidos = [
    { produto: "Batata Frita", qtd: 2 },
    { produto: "Refrigerante", qtd: 3 },
    { produto: "Pastel", qtd: 1 },
];

const PedidosComponent = () => {
    return (
        <>
            {Pedidos.map((pedido, index) => (
                <View style={styles.pedidoContainer} key={index}>
                    <Text>{pedido.produto} </Text>
                    <Text>{pedido.qtd}</Text>
                </View>
            ))}
        </>
    )
}

const styles = StyleSheet.create({
    pedidoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        backgroundColor: '#e2e2e2',
    }
});

export default PedidosComponent;