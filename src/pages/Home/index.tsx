import {View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import MainCard from '@Components/Cards/MainCard';

import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const books = [
    {
      title: 'como fazer amigos e influenciar pessoas',
      description:
        'Book Descriptions DescriptionsDescriptionsDescriptions DescriptionsDescriptionsDesc riptionsDescriptio nsDescriptions',
    },
    {
      title: 'A Arte da guerra',
      description:
        'Book Desc DescriptionsDescriptions DescriptionsDescriptionsDesc riptionsDescriptio nsDescriptions',
    },
    {
      title: 'Relacionamentos importam',
      description:
        'Book Descriptions DescriptionsDescriptionsDescriptions DescriptionsDescriptionsDesc riptionsDescriptio nsDescriptions',
    },
  ];

  return (
    <>
      <View>
        <View className="px-4 mt-4">
          <FlatList
            ItemSeparatorComponent={() => <View className="pb-4" />}
            data={books}
            renderItem={({item}) => (
              <MainCard title={item.title}>{item.description}</MainCard>
            )}
          />
        </View>
      </View>
      <TouchableOpacity className="absolute items-center content-center justify-center px-5 py-4 bg-gray-900 rounded-full bottom-2 right-2">
        <Icon name="plus" size={35} color="#ddd" />
      </TouchableOpacity>
    </>
  );
};

export default Home;
