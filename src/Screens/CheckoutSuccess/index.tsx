import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import theme from '../../Global/Styles/theme';
import * as S from './styles';
import { cleanCart } from '../../Redux/Slices/Cart';

export default function CheckoutSuccess() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanCart());
  }, []);

  const handleGoToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.purple.shadeOne}
      />

      <S.Container>
        <S.IconContainer>
          <S.Icon />
        </S.IconContainer>

        <S.Title>SUCESSO!</S.Title>
        <S.Subtitle>Compra realizada com sucesso, aproveite!</S.Subtitle>

        <S.Button activeOpacity={0.7} onPress={handleGoToHome}>
          <S.ButtonText>PROSSEGUIR</S.ButtonText>
        </S.Button>
      </S.Container>
    </>
  );
}
