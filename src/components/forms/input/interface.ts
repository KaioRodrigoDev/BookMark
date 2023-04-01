import {TextInputProps} from 'react-native';

export interface FormInputStates {
  hasError?: boolean;
  isFocused?: boolean;
  isDisabled?: boolean;
}

export interface FormInputProps extends TextInputProps {
  name: string;
  label: string;
  mask?: string;
  errors?: Record<string, any>;
}
