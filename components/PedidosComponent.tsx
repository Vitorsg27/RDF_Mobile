import { View } from "./Themed";
import { StyleSheet, Text } from 'react-native';
import { IPedidos } from "./Modal";
import { FC } from "react";


const PedidosComponent: FC<{pedidos:IPedidos[]}> = ({pedidos}) => {

    return (
        <>
            {pedidos.map((pedido, index) => {
                console.log(pedido, index)
                return(
                <View style={styles.pedidoContainer} key={index}>
                    <Text>{pedido.produto} </Text>
                    <Text>{pedido.qtd}</Text>
                </View>
                )
            })
        }
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