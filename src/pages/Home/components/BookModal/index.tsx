import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import ModalBook from '@Containers/modal/mainModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NewBookModalProps} from './interface';

const NewBookModal: React.FC<NewBookModalProps> = ({
  visible,
  onClose,
  onSend,
}) => {
  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  async function handleCreate() {
    await onSend(title, description);
  }

  return (
    <ModalBook visible={visible} onClose={onClose}>
      <View className="items-center justify-center pt-4 pb-4 rounded-lg bg-slate-600">
        <Icon name="book" size={35} color="#ddd" />
        <Text className="mt-4 font-bold text-white">
          Digite o nome do livro!
        </Text>
        <TextInput
          placeholder="Nome do Livro"
          onChangeText={text => setTitle(text)}
          className="justify-center items-center content-center h-10 text-center w-[80%] bg-slate-50 rounded-md "
        />
        <Text className="mt-4 font-bold text-white">Descrição do Livro</Text>
        <TextInput
          placeholder="Descrição"
          onChangeText={text => setDescription(text)}
          className="justify-center items-center content-center h-10 text-center w-[80%] bg-slate-50 rounded-md "
        />
        <TouchableOpacity
          onPress={handleCreate}
          className="items-center justify-center mt-4 rounded-md h-7 w-28 bg-slate-200">
          <Text className="font-semibold">Criar Livro</Text>
        </TouchableOpacity>
      </View>
    </ModalBook>
  );
};

export default NewBookModal;
