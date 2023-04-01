import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ModalBook from '@Containers/modal/mainModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ModalCreateProps} from './interface';

const ModalCreate: FC<ModalCreateProps> = ({visible, onClose}) => {
  return (
    <ModalBook visible={visible} onClose={onClose}>
      <View className="items-center justify-center rounded-lg h-44 bg-slate-600">
        <Icon name="book" size={35} color="#ddd" />
        <Text className="mt-4 font-bold text-white">
          Capitulo Ja existente !
        </Text>
        <TouchableOpacity
          onPress={onClose}
          className="items-center justify-center mt-4 rounded-md h-7 w-28 bg-slate-200">
          <Text className="font-semibold">OKAY!</Text>
        </TouchableOpacity>
      </View>
    </ModalBook>
  );
};

export default ModalCreate;
