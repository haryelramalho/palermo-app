import styled, { css } from 'styled-components/native';

import { CategoryCardProps } from '.';

export const Container = styled.View`
  margin-top: 13px;
  margin-bottom: 25px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.bold};
  font-size: ${({ theme }) => theme.fonts.size.small}px;

  color: ${({ theme }) => theme.colors.gray.shadeEight};

  margin-bottom: 4px;
`;

export const CategoriesCardList = styled.FlatList``;

export const CategoryCard = styled.TouchableOpacity<CategoryCardProps>`
  height: 28px;

  border: 1px solid ${({ theme }) => theme.colors.gray.shadeThree};
  ${({ selectedCategory, index }) =>
    selectedCategory === index &&
    css`
      border: ${({ theme }) => theme.colors.purple.shadeOne};
    `}}};

  border-radius: 11px;

  margin-right: 14px;

  ${({ selectedCategory, index }) =>
    selectedCategory === index &&
    css`
      background-color: ${({ theme }) => theme.colors.purple.shadeOne};
    `}}};
`;

export const CategoryCardTitle = styled.Text<CategoryCardProps>`
  font-family: ${({ theme }) => theme.fonts.type.worksans.bold};
  font-size: ${({ theme }) => theme.fonts.size.tiny}px;

  color: ${({ theme }) => theme.colors.gray.shadeSix};
  ${({ selectedCategory, index }) =>
    selectedCategory === index &&
    css`
      color: ${({ theme }) => theme.colors.white.shadeOne};
    `}}};

  margin: 6px 10px;
`;
