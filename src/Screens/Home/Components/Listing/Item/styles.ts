import styled from 'styled-components/native';

import AddButtonIcon from '../../../../../Assets/Svgs/add-button.svg';

export type ContainerProps = {
  useMargin: boolean;
};

export const Container = styled.View<ContainerProps>`
  flex: 1;
  align-items: center;

  margin-right: ${({ useMargin }) => (useMargin ? 32 : 0)}px;
  margin-bottom: 44px;
`;

export const ImageContainer = styled.View`
  flex: 1;

  shadow-offset: 0px 3px;
  shadow-radius: 3px;
  shadow-color: #0005;
  shadow-opacity: 0.7;

  elevation: 5;
`;

export const Image = styled.Image`
  width: 155px;
  height: 139px;

  border-radius: 16px;
`;

export const BadgeIconContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 10px;

  justify-content: center;
  align-items: center;

  height: 28px;
  width: 28px;

  border-width: 1.5px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.purple.shadeOne};

  border-radius: 14px;

  background-color: ${({ theme }) => theme.colors.white.shadeOne};
`;

export const BadgeIcon = styled(AddButtonIcon)``;

export const Info = styled.View`
  align-items: flex-start;

  margin-top: 8px;

  width: 90%;
`;

export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.bold};
  font-size: ${({ theme }) => theme.fonts.size.tiny}px;

  color: ${({ theme }) => theme.colors.purple.shadeOne};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.bold};
  font-size: ${({ theme }) => theme.fonts.size.medium}px;

  color: ${({ theme }) => theme.colors.black.shadeOne};
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.bold};
  font-size: ${({ theme }) => theme.fonts.size.large}px;

  color: ${({ theme }) => theme.colors.purple.shadeOne};
`;
