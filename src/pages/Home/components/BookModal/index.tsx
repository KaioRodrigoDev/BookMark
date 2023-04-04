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
      <View className="p-6 pt-4 pb-4 rounded-lg bg-slate-600">
        <View className="self-center">
          <Icon name="book" size={35} color="#ddd" />
        </View>
        <Text className="mt-4 font-bold text-white">
          Digite o nome do livro!
        </Text>
        <TextInput
          placeholder="Nome do Livro"
          onChangeText={text => setTitle(text)}
          className="items-center content-center justify-center h-10 text-black rounded-md bg-slate-50"
        />
        <Text className="mt-4 font-bold text-white">Descrição do livro</Text>
        <TextInput
          placeholder="Descrição do livro"
          onChangeText={text => setDescription(text)}
          multiline={true}
          numberOfLines={2}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{textAlignVertical: 'top'}}
          className="text-black rounded-md bg-slate-50"
        />
        <TouchableOpacity
          onPress={handleCreate}
          className="items-center self-center justify-center mt-4 text-black rounded-md h-7 w-28 bg-slate-200">
          <Text className="font-semibold">Criar Livro</Text>
        </TouchableOpacity>
      </View>
    </ModalBook>
  );
};

export default NewBookModal;
