
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../Components/Header';
import Body from '../../Components/Body/Index';
import Boton from '../../Components/Boton/boton';
export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.container2}>
        <Body />
        <Boton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: '5%'
  },
});
