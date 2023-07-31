import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface MyComponentProps {
    text: string;
    onPress?: (() => void)[];
}

const ButtonOrange = ({ text, onPress }: MyComponentProps) => {
    const handlePress = () => {
        if (onPress && Array.isArray(onPress) && onPress.length > 0) {
            onPress.forEach((func) => func());
        }
    };
    return (
        <TouchableOpacity style={[styles.desks]} onPress={handlePress}>
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