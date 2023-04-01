import {View, TextInput} from 'react-native';
import React from 'react';
import {FormInputProps} from './interface';

const FormInput = ({label, onChangeText, ...props}: FormInputProps) => {
  return (
    <View>
      <TextInput
        //@ts-ignore
        {...props}
        placeholder={label}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default FormInput;
