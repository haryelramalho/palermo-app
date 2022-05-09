import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../../../../Redux/Slices/Cart';
import * as S from './styles';
import { Product } from '../../../../../Service/Api/ProductsApi/types';

export type ItemProps = {
  product: Product;
  index: number;
};

export default function Item({ index, product }: ItemProps) {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(addItem(product));
  };

  const shouldUseMargin = index % 2 === 0;

  return (
    <S.Container useMargin={shouldUseMargin}>
      <S.ImageContainer>
        <S.Image source={{ uri: product.image }} />

        <S.BadgeIconContainer activeOpacity={0.7} onPress={handlePress}>
          <S.BadgeIcon />
        </S.BadgeIconContainer>
      </S.ImageContainer>

      <S.Info>
        <S.Category>{product.category}</S.Category>

        <S.Title numberOfLines={1}>{product.title}</S.Title>

        <S.Value>{`$${product.price}`}</S.Value>
      </S.Info>
    </S.Container>
  );
}
