import { StyleSheet, ScrollView, Dimensions } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Desks from '@/components/Desks';
import Modal from '@/components/Modal';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mesas</Text>
      <View style={styles.deskContainer}>
        <ScrollView>
          <View style={styles.desksArea}>
            <Desks text="Mesa 1" color="red" />
            <Desks text="Mesa 2" color="white" />
            <Desks text="Mesa 3" color="white" />
            <Desks text="Mesa 4" color="white" />
            <Desks text="Mesa 5" color="white" />
            <Desks text="Mesa 6" color="#00bf63" />
            <Desks text="Mesa 7" color="#00bf63" />
            <Desks text="Mesa 8" color="red" />
            <Desks text="Mesa 9" color="#00bf63" />
            <Desks text="Mesa 10" color="#00bf63" />
            <Desks text="Mesa 11" color="#00bf63" />
            <Desks text="Mesa 12" color="#00bf63" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  deskContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desksArea: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
