import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function Boton() {
  return (
    <View style={styles.container}>
      <Button
        title="Reportar"
        onPress={() => console.log('Botão clicado!')}
        style={styles.button}
        color="#07689f"
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    marginRight: '10%'

  },

});

