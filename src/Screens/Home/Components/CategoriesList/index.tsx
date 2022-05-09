/* eslint-disable no-unused-vars */
import React from 'react';

import * as S from './styles';

type CategoriesListProps = {
  categories: string[] | null;
  selectedCategory: number;
  setCategory: (categoryIndex: number) => void;
};

export type CategoryCardProps = {
  selectedCategory: number;
  index: number;
};

export default function CategoriesList({
  categories,
  setCategory,
  selectedCategory,
}: CategoriesListProps) {
  return (
    <S.Container>
      <S.Title>FILTRAR CATEGORIA</S.Title>

      <S.CategoriesCardList
        horizontal
        data={categories}
        scrollEventThrottle={16}
        keyExtractor={(item: any) => item.toString()}
        renderItem={({ item, index }) => (
          <S.CategoryCard
            onPress={() => setCategory(index)}
            selectedCategory={selectedCategory}
            index={index}
          >
            <S.CategoryCardTitle
              selectedCategory={selectedCategory}
              index={index}
            >
              {item as string}
            </S.CategoryCardTitle>
          </S.CategoryCard>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </S.Container>
  );
}
