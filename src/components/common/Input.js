import React from 'react';
import { TextInput, Text, View } from 'react-native';

// value dan onChangeText dari LoginForm
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        // style={{ height: 28, width: 100 }} // hapus saja
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23, // menebalkan garis
    flex: 2 // flex 3 yang dibagi 2 dengan labelStyle
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1 // hanya dapat 1/3 ruang dari flex 3
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};
// setiap setelah menulis style baiknya buat const di atas yaaa

export { Input };
