import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface MyComponentProps {
    text: string;
    onPress?: () => void;
}

const ButtonOrange = ({ text, onPress }: MyComponentProps) => {
    return (
        <TouchableOpacity style={[styles.desks]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    desks: {
        backgroundColor: '#ff3131',
        borderRadius: 20,
        minWidth: 100,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#fff",
        fontWeight: 'bold',
    }
})

export default ButtonOrange;