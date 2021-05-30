// 컴파일 오류가 있는 초기 모습
// import React, {ForwardedRef} from 'react';
// import type {FC, ComponentProps} from 'react';
// import {TextInput as RNTextInput} from 'react-native';
// import type {StyleProp, TextStyle} from 'react-native';
// import {useTheme} from 'react-native-paper';

// export type TextInputProps = ComponentProps<typeof RNTextInput> & {
//   ref: ForwardedRef<RNTextInput>;
// };
// export const TextInput: FC<TextInputProps> = ({style, ref, ...props}) => {
//   const {colors} = useTheme();

//   return (
//     <RNTextInput
//       ref={ref}
//       style={[{color: colors.text, borderColor: colors.placeholder}, style]}
//       {...props}
//     />
//   );
// };

// 최종 모습
import React, {forwardRef} from 'react';
import type {ForwardRefRenderFunction, ComponentProps} from 'react';
import {TextInput as RNTextInput} from 'react-native';
import {useTheme} from 'react-native-paper';
export type TextInputProps = ComponentProps<typeof RNTextInput>;

const _TextInput: ForwardRefRenderFunction<RNTextInput, TextInputProps> = (
  {style, ...props},
  ref,
) => {
  const {colors} = useTheme();
  return (
    <RNTextInput
      ref={ref}
      style={[{color: colors.text, borderColor: colors.placeholder}, style]}
      {...props}
    />
  );
};
export const TextInput = forwardRef(_TextInput);
