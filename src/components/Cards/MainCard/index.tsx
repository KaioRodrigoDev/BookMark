import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {CardProps} from './interface';

const MainCard = ({title, children, handleDelete, handlePress}: CardProps) => {
  return (
    <TouchableOpacity
      onPress={() => handlePress(title)}
      onLongPress={() => handleDelete(title)}
      className="w-full h-24 bg-[#D7D7D7] rounded-md flex-row overflow-hidden">
      <View className="w-24 m-1 bg-black" />
      <View className="justify-center w-3/4 pl-2">
        <Text
          className="max-w-[90%] text-lg font-extrabold text-[#000]"
          numberOfLines={1}>
          {title}
        </Text>
        {children && (
          <Text
            className="max-w-[90%] mt-1 font-medium text-[#636363] "
            numberOfLines={2}>
            {children}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MainCard;
