import React from 'react';

import { Product } from '../../../../../Service/Api/ProductsApi/types';
import Item from '../Item';
import * as S from './styles';

type ListProps = {
  products: Product[] | null;
};

export default function List({ products }: ListProps) {
  function renderItem(item: Product, index: number) {
    return <Item product={item} index={index} key={item.title} />;
  }

  function renderList() {
    if (!products) return null;

    return products?.map((item, index) => {
      if (index % 2 > 0) return null;

      const nextIndex = index + 1;
      const nextItem = products[nextIndex];

      if (!nextItem) return null;

      return (
        <S.RowContainer>
          {renderItem(item, index)}
          {renderItem(nextItem, nextIndex)}
        </S.RowContainer>
      );
    });
  }

  return <S.Container>{renderList()}</S.Container>;
}
