import RNModalbox from 'react-native-modalbox';
import React from 'react';
import {ModalBookProps} from './interface';

const ModalBook = (props: ModalBookProps) => {
  const {visible, onClose} = props;

  return (
    <RNModalbox
      isOpen={visible}
      position="center"
      swipeToClose
      onClosed={onClose}
      coverScreen
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          height: 'auto',
          width: '90%',
          left: 'auto',
          right: 'auto',
          borderRadius: 12,
        },
      ]}>
      {props.children}
    </RNModalbox>
  );
};

export default ModalBook;
