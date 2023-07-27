import { StyleSheet, ScrollView } from 'react-native';

import { Text, View } from '@/components/Themed';
import Desks from '@/components/Desks';

const Mesas = [
  { id: 'Mesa 1', color: 'red' },
  { id: 'Mesa 2', color: 'white' },
  { id: 'Mesa 3', color: 'white' },
  { id: 'Mesa 4', color: 'white' },
  { id: 'Mesa 5', color: 'white' },
  { id: 'Mesa 6', color: '#00bf63' },
  { id: 'Mesa 7', color: '#00bf63' },
  { id: 'Mesa 8', color: 'red' },
  { id: 'Mesa 9', color: '#00bf63' },
  { id: 'Mesa 10', color: '#00bf63' },
  { id: 'Mesa 11', color: '#00bf63' },
  { id: 'Mesa 12', color: '#00bf63' },
];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mesas</Text>
      <View style={styles.deskContainer}>
        <ScrollView>
          <View style={styles.desksArea}>
            {Mesas.map((mesa, index) => (
              <Desks text={mesa.id} color={mesa.color} key={index}/>
            ))}
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
