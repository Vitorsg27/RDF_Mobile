import { Text, View } from "./Themed";
import { StyleSheet } from 'react-native';

interface DesksProps {
    text: string;
    color: string;
}

export default function Desks({ text, color }: DesksProps) {
    return (
        <View style={[styles.desks, { backgroundColor: color }]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    desks: {
        borderRadius: 30,
        width: 120,
        paddingVertical: 40,
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#000",
        fontWeight: 'bold',
    }
})