import { View } from "./Themed";
import { StyleSheet, Text } from 'react-native';

interface MyComponentProps {
    Comanda: any[];
}

const ComandaComponent = ({ Comanda }: MyComponentProps) => {
    return (
        <>
            <View style={{ backgroundColor: '#e2e2e2' }}>
                {Comanda.map((pedido, index) => (
                    <View style={styles.pedidoContainer} key={index}>
                        <Text style={styles.produto}>{pedido.produto} </Text>
                        <Text style={styles.qtd}>{pedido.qtd}</Text>
                        <Text style={styles.preco}>{formatPrice(pedido.preco)}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.total}>
                <Text>Total</Text>
                <Text>R$ 167,00</Text>
            </View>
        </>
    )
}

const formatPrice = (price: number) => {
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);
    return formattedPrice;
};

const styles = StyleSheet.create({
    pedidoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        backgroundColor: '#e2e2e2',
        flexWrap: "nowrap",
    },
    produto: {
        flex: 2,
    },
    qtd: {
        flex: 1,
        textAlign: 'center',
    },
    preco: {
        flex: 1,
        textAlign: 'right',
    },
    total: {
        backgroundColor: '#e2e2e2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    }
});


export default ComandaComponent;