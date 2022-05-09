import { isIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';

import styled, { css } from 'styled-components/native';

import Icon from '../../Assets/Svgs/bag-icon.svg';

const DEFAULT_MARGIN_TOP = 32;

export const Container = styled.ScrollView`
  flex: 1;

  margin: 0px 16px;

  ${isIphoneX() &&
  css`
    margin-top: ${DEFAULT_MARGIN_TOP + getStatusBarHeight()}px;
  `};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.bold};
  font-size: ${({ theme }) => theme.fonts.size.title}px;
`;

export const BagIcon = styled(Icon).attrs({
  width: 24,
  height: 24,
})``;

export const BagIconContainer = styled.TouchableOpacity``;

export const BadgeIcon = styled.View`
  position: absolute;
  right: 0;
  z-index: 1;

  justify-content: center;
  align-items: center;

  height: 14px;
  width: 14px;

  border-width: 1.5px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray.shadeSeven};

  border-radius: 14px;

  background-color: ${({ theme }) => theme.colors.white.shadeOne};
`;

export const BadgeIconText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.bold} })};
  font-size: 8px;

  color: ${({ theme }) => theme.colors.purple.shadeOne};
`;

export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.semibold} })};
  font-size: 24px;

  margin-bottom: 20px;
`;

export const CategoriesList = styled.FlatList``;

export const Divider = styled.View`
  height: 1px;

  margin: 25px -32px 20px -32px;

  border-radius: 20px;

  background: ${({ theme }) => theme.colors.gray.shadeThree};
`;

export const BottomSheetContent = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white.shadeOne};
`;

export const GoToCartButton = styled.TouchableOpacity`
  height: 50px;

  background-color: ${({ theme }) => theme.colors.purple.shadeThree};

  align-items: center;
  justify-content: center;

  border-radius: 37px;

  margin-bottom: 30px;
`;

export const GoToCartButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.bold} })};
  font-size: 14px;

  padding: 16.5px 86.5px;

  color: ${({ theme }) => theme.colors.white.shadeOne}
`;
