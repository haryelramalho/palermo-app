import React, { useEffect, useState, useRef, useMemo } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import BottomSheet from '@gorhom/bottom-sheet';

import theme from '../../Global/Styles/theme';
import { useReduxSelector } from '../../Hooks/useReduxSelector';
import {
  getCategories,
  getProducts,
  getProductsByCategory,
} from '../../Redux/Slices/Products';
import { selectCart } from '../../Redux/Slices/Cart/selectores';
import {
  selectCategories,
  selectProducts,
  selectNews,
} from '../../Redux/Slices/Products/selectores';
import { AppDispatch } from '../../Redux/types';
import CategoriesList from './Components/CategoriesList';
import List from './Components/Listing/List';
import NewsList from './Components/NewsList';
import * as S from './styles';

const INITIAL_CATEGORY = 0;

export default function Home() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] =
    useState(INITIAL_CATEGORY);

  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();

  const products = useReduxSelector(selectProducts);
  const categories = useReduxSelector(selectCategories);
  const cart = useReduxSelector(selectCart);
  const news = useReduxSelector(selectNews);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    if (categories) {
      const categoryName = categories[selectedCategoryIndex];

      if (selectedCategoryIndex !== INITIAL_CATEGORY) {
        dispatch(getProductsByCategory(categoryName));
      } else {
        dispatch(getProducts());
      }
    }
  }, [selectedCategoryIndex]);

  const handleSelectCategory = (categoryIndex: number) => {
    setSelectedCategoryIndex(categoryIndex);
  };

  const handleNavigateToCart = () => {
    navigation.navigate('Cart');
  };

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['15%'], []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.purple.shadeOne}
      />

      <S.Container showsVerticalScrollIndicator={false}>
        <S.Header>
          <S.HeaderTitle>Produtos</S.HeaderTitle>

          <S.BagIconContainer
            activeOpacity={0.7}
            onPress={handleNavigateToCart}
          >
            {cart.totalItems > 0 && (
              <S.BadgeIcon>
                <S.BadgeIconText>{cart.totalItems}</S.BadgeIconText>
              </S.BadgeIcon>
            )}

            <S.BagIcon />
          </S.BagIconContainer>
        </S.Header>

        <CategoriesList
          categories={categories}
          setCategory={handleSelectCategory}
          selectedCategory={selectedCategoryIndex}
        />

        <S.SectionTitle>Novidades</S.SectionTitle>

        <NewsList news={news} />

        <S.Divider />

        <S.SectionTitle>Listagem</S.SectionTitle>

        <List products={products} />
      </S.Container>

      {cart.totalItems > 0 && (
        <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
          <S.BottomSheetContent>
            <S.GoToCartButton
              activeOpacity={0.7}
              onPress={handleNavigateToCart}
            >
              <S.GoToCartButtonText>IR PARA O CARRINHO</S.GoToCartButtonText>
            </S.GoToCartButton>
          </S.BottomSheetContent>
        </BottomSheet>
      )}
    </>
  );
}
