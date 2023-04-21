import React, { useState } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function Body() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);

  const handleOnChangeText1 = (value) => {
    setText1(value);
  };

  const handleOnChangeText2 = (value) => {
    setText2(value);
  };

  const handleOnPress1 = () => {
    setIsSelected1(true);
    setIsSelected2(false);
    setIsSelected3(false);
  };

  const handleOnPress2 = () => {
    setIsSelected1(false);
    setIsSelected2(true);
    setIsSelected3(false);
  };

  const handleOnPress3 = () => {
    setIsSelected1(false);
    setIsSelected2(false);
    setIsSelected3(true);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >

      <View style={styles.checkboxesContainer}>
        <CheckBox
          title='O profissional não apareceu.'
          checked={isSelected1}
          onPress={handleOnPress1}
        />
        <CheckBox
          title='O profissional não prestou um bom serviço.'
          checked={isSelected2}
          onPress={handleOnPress2}
        />
        <CheckBox
          title='Outro'
          checked={isSelected3}
          onPress={handleOnPress3}
        />
      </View>
      <View style={styles.textinputContainer}>
        <TextInput
          style={{ height: 40, width: '100%', borderColor: 'gray', borderWidth: 1 }}
          onChangeText={handleOnChangeText1}
          placeholder="  Título"
          value={text1}
        />
      </View>
      <View style={styles.textinputContainer2}>
        <TextInput
          style={{ width: '100%', borderColor: 'gray', borderWidth: 1, textAlignVertical: 'top' }}
          multiline={true}
          numberOfLines={10}
          placeholder="  Especifique aqui o que houve."
          onChangeText={handleOnChangeText2}
          value={text2}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  checkboxesContainer: {

    alignItems: 'flex-start',
    marginBottom: 20,
    marginTop: '10%',
  },

  textinputContainer: {
    aalignItems: 'flex-start',
    marginBottom: 20,
    width: '90%',
  },

  textinputContainer2: {
    alignItems: 'flex-start',
    marginBottom: 20,
    width: '90%',
  }

});