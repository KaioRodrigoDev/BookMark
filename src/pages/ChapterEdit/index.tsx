import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import FormInput from '@Components/forms/input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const ChapterEdit = ({route}) => {
  const [title, setTitle] = useState('');
  const [page, setPage] = useState('');
  const [description, setDescription] = useState('');
  const {navigate} = useNavigation();
  useEffect(() => {
    setTitle(route.params.chapter.title);
    setDescription(route.params.chapter.description);
    setPage(route.params.chapter.page);
  }, [route]);

  const handleSave = useCallback(async () => {
    const data = await AsyncStorage.getItem(`@Books/${route.params.book}`);
    const book = JSON.parse(data);

    if (book) {
      const chapterIndex = book.findIndex(
        chapter => chapter.title === route.params.chapter.title,
      );
      book[chapterIndex].description = description;
      await AsyncStorage.setItem(
        `@Books/${route.params.book}`,
        JSON.stringify(book),
      );
      navigate('Chapters', book);
    }
  }, [description, route, navigate]);

  return (
    <View className="px-4">
      <View>
        <Text className="px-2 py-4 mt-4 mb-4 font-bold text-black bg-white rounded-md">
          {title}
        </Text>
        {page && (
          <Text className="px-2 py-4 mt-4 mb-4 font-bold text-black bg-white rounded-md">
            {page}
          </Text>
        )}
        <Text className="font-bold text-white">Edite a anotação</Text>
        <FormInput
          label="Anotação"
          name="description"
          multiline={true}
          value={description}
          onChangeText={text => setDescription(text)}
          numberOfLines={6}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{textAlignVertical: 'top'}}
          className="text-black border-2 border-black border-solid rounded-md border-1 bg-slate-50"
        />
      </View>

      <TouchableOpacity
        onPress={() => handleSave()}
        className="items-center self-center justify-center mt-4 text-black rounded-md h-7 w-28 bg-slate-200">
        <Text className="font-semibold">Salvar anotação</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChapterEdit;
