import { View } from "./Themed";
import { StyleSheet, Text } from 'react-native';

interface MyComponentProps {
    Pedidos: any[];
}

const PedidosComponent = ({ Pedidos }: MyComponentProps) => {
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