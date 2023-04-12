import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import ModalBook from '@Containers/modal/mainModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NewChapterModalProps} from './interface';

const NewChapterModal: React.FC<NewChapterModalProps> = ({
  visible,
  onClose,
  onSend,
}) => {
  const [title, setTitle] = useState('');
  const [page, setPage] = useState('');

  const [description, setDescription] = useState('');

  async function handleCreate() {
    await onSend(title, description, page);
  }

  return (
    <ModalBook visible={visible} onClose={onClose}>
      <View className="p-6 pt-4 pb-4 rounded-lg bg-slate-600">
        <View className="self-center">
          <Icon name="book" size={35} color="#ddd" />
        </View>
        <Text className="mt-4 font-bold text-white">Digite um Titulo!</Text>
        <TextInput
          placeholder="Digite um titulo ou Capitulo"
          onChangeText={text => setTitle(text)}
          className="items-center content-center justify-center h-10 text-black rounded-md bg-slate-50"
        />
        <Text className="mt-4 font-bold text-white">Digite a pagina</Text>
        <TextInput
          placeholder="Digite a pagina"
          onChangeText={text => setPage(text)}
          className="items-center content-center justify-center h-10 text-black rounded-md bg-slate-50"
        />
        <Text className="mt-4 font-bold text-white">Anotação:</Text>
        <TextInput
          placeholder="Anotação"
          onChangeText={text => setDescription(text)}
          multiline={true}
          numberOfLines={5}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{textAlignVertical: 'top'}}
          className="text-black rounded-md bg-slate-50"
        />
        <TouchableOpacity
          onPress={handleCreate}
          className="items-center self-center justify-center mt-4 rounded-md h-7 w-28 bg-slate-200">
          <Text className="font-semibold">Criar Anotação</Text>
        </TouchableOpacity>
      </View>
    </ModalBook>
  );
};

export default NewChapterModal;
