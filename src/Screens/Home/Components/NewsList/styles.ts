import styled from 'styled-components/native';

import AddButtonIcon from '../../../../Assets/Svgs/add-button.svg';

export const List = styled.FlatList``;

export const Product = styled.View`
  margin-right: 48px;

  flex: 1;
`;

export const ImageContainer = styled.View`
  width: 180px;
  height: 183px;

  shadow-offset: 0px 3px;
  shadow-radius: 3px;
  shadow-color: #0005;
  shadow-opacity: 0.7;

  elevation: 5;
`;

export const Image = styled.Image`
  flex: 1;

  border-radius: 10px;
`;

export const Info = styled.View`
  align-items: flex-start;

  margin-top: 8px;

  height: 100%;
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

  width: 150px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.medium};
  font-size: ${({ theme }) => theme.fonts.size.tiny}px;

  color: ${({ theme }) => theme.colors.gray.shadeOne};

  width: 150px;
`;

export const ValueContainer = styled.View`
  flex-direction: row;

  width: 100%;

  align-items: center;
  justify-content: space-between;

  margin-top: 16px;
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.bold};
  font-size: ${({ theme }) => theme.fonts.size.large}px;

  color: ${({ theme }) => theme.colors.purple.shadeOne};
`;

export const BadgeIconContainer = styled.TouchableOpacity`
  /* position: absolute; */
  /* bottom: 0; */
  /* right: 0; */

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
