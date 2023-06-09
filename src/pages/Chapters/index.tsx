import {View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainCard from '@Components/Cards/MainCard';
import {BookProps} from '@Types/home/books';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalCreate from './components/ErrorModal';
import NewBookModal from './components/ChaptersModal';
import {RouteProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import ChapterCard from '@Components/Cards/ChapterCard';

type ChaptersRouteParams = {
  params: string;
};

type ChaptersProps = {
  route: RouteProp<Record<string, ChaptersRouteParams>, string>;
};
const Chapters: React.FC<ChaptersProps> = ({route}) => {
  const [books, setBooks] = useState<[] | BookProps[]>([]);
  const {navigate} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [warningModal, setWarningModal] = useState(false);

  useEffect(() => {
    async function loadTask() {
      const taskStorage = await AsyncStorage.getItem(`@Books/${route.params}`);

      if (taskStorage) {
        setBooks(JSON.parse(taskStorage));
      }
    }

    loadTask();
  }, [route]);

  useEffect(() => {
    AsyncStorage.setItem(`@Books/${route.params}`, JSON.stringify(books));
  }, [books, route]);

  const handleAdd = useCallback(
    (title: string, description: string, page: string) => {
      function hasBook(titleBook: string) {
        console.log(books.some(element => element.title === titleBook));
        return books.some(element => element.title === titleBook);
      }
      try {
        const data = {
          title: title,
          page: page,
          description: description,
        };
        if (books.length === 0) {
          setBooks([data]);
          return data;
        }

        if (hasBook(title) === true) {
          return setWarningModal(true);
        }
        console.log('title');

        setBooks([...books, data]);
      } catch (err) {
        return err;
      } finally {
        setModalVisible(false);
      }
    },
    [books, setBooks],
  );

  function handleOpen() {
    setModalVisible(true);
  }

  const handleDelete = useCallback(
    (title: string) => {
      const removed = books.filter(r => r.title !== title);
      setBooks(removed);
    },
    [setBooks, books],
  );

  const handlePress = useCallback(
    (item: string) => {
      //@ts-ignore
      navigate('ChapterDescription', {chapter: item, book: route.params});
    },
    [navigate, route],
  );

  return (
    <>
      <View>
        <View className="px-4 mt-4">
          {books && (
            <FlatList
              ItemSeparatorComponent={() => <View className="pb-4" />}
              data={books}
              renderItem={({item}) => (
                <ChapterCard
                  title={item.title}
                  item={item}
                  handleDelete={handleDelete}
                  handlePress={handlePress}>
                  {item.description}
                </ChapterCard>
              )}
            />
          )}
        </View>

        <ModalCreate
          visible={warningModal}
          onClose={() => setWarningModal(false)}
        />

        <NewBookModal
          visible={modalVisible}
          onSend={handleAdd}
          onClose={() => setModalVisible(false)}
        />
      </View>
      <TouchableOpacity
        onPress={() => handleOpen()}
        className="absolute items-center content-center justify-center px-5 py-4 bg-gray-900 rounded-full bottom-2 right-2">
        <Icon name="plus" size={35} color="#ddd" />
      </TouchableOpacity>
    </>
  );
};

export default Chapters;
