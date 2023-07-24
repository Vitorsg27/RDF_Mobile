import { Text, View } from "./Themed";
import { StyleSheet, TouchableOpacity } from 'react-native';
import Modal from '@/components/Modal';
import { useState } from 'react'

interface DesksProps {
    text: string;
    color: string;
}

export default function Desks({ text, color }: DesksProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const onPress = () => {
        setModalVisible(!modalVisible);
    }
    return (
        <>
            <TouchableOpacity style={[styles.desks, { backgroundColor: color }]} onPress={onPress}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
            <Modal modalVisible={modalVisible} onPress={onPress} text={text}/>
        </>
    )
}

const styles = StyleSheet.create({
    desks: {
        borderRadius: 30,
        width: 100,
        paddingVertical: 30,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#000",
        fontWeight: 'bold',
    }
})