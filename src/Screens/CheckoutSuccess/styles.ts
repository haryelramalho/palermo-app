import styled from 'styled-components/native';

import SuccessIcon from '../../Assets/Svgs/success-icon.svg';

export const Container = styled.View`
  height: 100%;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.purple.shadeOne};
`;

export const IconContainer = styled.View`
  height: 160px;
  width: 160px;

  align-items: center;
  justify-content: center;

  border-width: 5px;
  border-color: ${({ theme }) => theme.colors.white.shadeOne};

  border-radius: 138px;

  margin-bottom: 30px;
`;

export const Icon = styled(SuccessIcon)``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.bold} };
  font-size: 22px;

  color: ${({ theme }) => theme.colors.white.shadeOne};
`;

export const Subtitle = styled.Text`
  margin-top: 10px;

  font-family: ${({ theme }) => theme.fonts.type.worksans.medium} };
  font-size: 14px;

  color: ${({ theme }) => theme.colors.white.shadeOne};
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 49px;

  align-items: center;
  justify-content: center;

  border-radius: 37px;

  background-color: ${({ theme }) => theme.colors.purple.shadeThree};

  position: absolute;
  bottom: 30px;

  shadow-offset: 0px 8px;
  shadow-radius: 3px;
  shadow-color: #c2c1f84d;
  shadow-opacity: 0.7;
`;

export const ButtonText = styled.Text`
  padding: 16px 110px;

  font-family: ${({ theme }) => theme.fonts.type.worksans.bold};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.white.shadeOne};
`;
