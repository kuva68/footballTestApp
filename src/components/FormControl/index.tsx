import BaseText from '@components/BaseText';
import Icons from '@constants/Icons';
import customTheme from '@theme';
import { scaledSize } from '@utils/scaleSize';
import { Input, Box } from 'native-base';
import React, { FC, memo, useEffect, useRef } from 'react';
import { Controller } from 'react-hook-form';
import { TextInput } from 'react-native';
import styles from './styles';

interface FormControlProp {
  name: string;
  control: any;
  error: string;
  description: string;
}
const FormControl: FC<FormControlProp> = ({ name, control, error, description }) => {
  const getIcons = () => {
    switch (name) {
      case 'email':
        return <Icons.MailIcon width={20} height={14} style={styles.icon} />;
      case 'fullName':
        return <Icons.People width={16} height={20} style={styles.icon} />;
      case 'password':
        return <Icons.Lock width={12} height={16} style={styles.icon} />;
      default:
        return <Icons.Phone width={19.5} height={19.5} style={styles.icon} />;
    }
  };
  const ref = useRef<TextInput>();
  useEffect(() => {
    if (ref?.current) {
      ref?.current?.setNativeProps({ text: '' });
    }
  }, [name]);
  return (
    <Box width={scaledSize(333)}>
      <BaseText marginY={scaledSize(7)}>{description}</BaseText>
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: name === 'fullName' ? 4 : name === 'phone' ? 10 : 6,
          pattern:
            name === 'email'
              ? /(?![_.-])((?![_.-][_.-])[\w.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}/
              : undefined,
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            ref={ref}
            w={scaledSize(333)}
            h={scaledSize(50)}
            borderColor={customTheme.colors.primary}
            borderWidth={0.5}
            bg={customTheme.colors.primaryBackground}
            pl={5}
            color={customTheme.colors.TEXT_DEFAULT}
            fontSize={17}
            fontWeight="500"
            borderRadius={15}
            onChangeText={onChange}
            value={value}
            leftElement={getIcons()}
            keyboardType={name === 'phone' ? 'numeric' : name === 'email' ? 'email-address' : 'default'}
          />
        )}
        name={name}
      />

      <BaseText color="red.500" h={10}>
        {error ? 'This is required.' : ''}
      </BaseText>
    </Box>
  );
};

export default memo(FormControl);
