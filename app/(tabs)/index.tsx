import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Desks from '@/components/Desks';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
