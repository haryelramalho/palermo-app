import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../../../Redux/Slices/Cart';
import { Product } from '../../../../Service/Api/ProductsApi/types';
import * as S from './styles';

type NewsListProps = {
  news: Product[] | null;
};

export default function NewsList({ news }: NewsListProps) {
  const dispatch = useDispatch();

  const handlePress = (product: Product) => {
    dispatch(addItem(product));
  };

  function renderItem(item: Product) {
    return (
      <S.Product>
        <S.ImageContainer>
          <S.Image source={{ uri: item.image }} />
        </S.ImageContainer>

        <S.Info>
          <S.Category>{item.category}</S.Category>

          <S.Title numberOfLines={1}>{item.title}</S.Title>
          <S.Description numberOfLines={2}>{item.description}</S.Description>

          <S.ValueContainer>
            <S.Value>${item.price}</S.Value>

            <S.BadgeIconContainer
              onPress={() => handlePress(item)}
              activeOpacity={0.7}
            >
              <S.BadgeIcon />
            </S.BadgeIconContainer>
          </S.ValueContainer>
        </S.Info>
      </S.Product>
    );
  }

  return (
    <S.List
      data={news}
      scrollEventThrottle={16}
      renderItem={({ item }) => renderItem(item as Product)}
      horizontal
      keyExtractor={(item: any) => {
        return item.id;
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
