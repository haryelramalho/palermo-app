import Modal from 'react-native-modal';

import styled from 'styled-components/native';

type ModalButtonTextProps = {
  color: string;
};

export const ModalContainer = styled(Modal)`
  align-items: center;
`;

export const ModalContent = styled.View`
  align-items: center;

  width: 290px;
  height: 180px;

  background-color: ${({ theme }) => theme.colors.white.shadeOne};

  border-radius: 10px;

  padding-top: 20px;
`;

export const ModalTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.montserrat.bold} })};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.gray.shadeTen};
`;

export const ModalDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.montserrat.bold} })};
  font-size: 12px;

  color: ${({ theme }) => theme.colors.gray.shadeEleven};

  margin: 5px 20px;

  text-align: center;
`;

export const ModalButton = styled.TouchableOpacity``;

export const ModalButtonButtonText = styled.Text<ModalButtonTextProps>`
  font-family: ${({ theme }) => theme.fonts.type.montserrat.bold} })};
  font-size: 12px;

  color: ${({ color }) => color};
`;

export const ModalDivider = styled.View`
  height: 1px;
  width: 100%;

  margin: 12px 0;

  background-color: ${({ theme }) => theme.colors.white.shadeTwo};
`;
