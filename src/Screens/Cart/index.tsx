import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import { useReduxSelector } from '../../Hooks/useReduxSelector';
import { selectCart } from '../../Redux/Slices/Cart/selectores';
import * as S from './styles';
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeItem,
} from '../../Redux/Slices/Cart';
import Modal from './Components/Modal';
import { Product } from '../../Service/Api/ProductsApi/types';
import theme from '../../Global/Styles/theme';

const NOT_SELECTED_ITEM_VALUE = 0;

export default function Cart() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<number>(
    NOT_SELECTED_ITEM_VALUE,
  );

  const cart = useReduxSelector(selectCart);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleIncrementQuantity = (product: Product) => {
    dispatch(incrementItemQuantity(product.id));
  };

  const handleDecrementQuantity = (product: Product) => {
    if (product.quantity === 1) {
      setSelectedProduct(product.id);
      return setIsModalVisible(true);
    }

    dispatch(decrementItemQuantity(product.id));
  };

  const handleNavigateToHome = () => {
    navigation.navigate('Home');
  };

  const handleNavigateToCheckoutSuccess = () => {
    navigation.navigate('CheckoutSuccess');
  };

  const handleDismissModal = () => {
    setIsModalVisible(false);
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(selectedProduct));

    setIsModalVisible(false);
    setSelectedProduct(NOT_SELECTED_ITEM_VALUE);
  };

  function renderProduct(item: Product) {
    return (
      <S.ProductCard>
        <S.ProdutCardWrapper>
          <S.ProductImageContainer>
            <S.ProductImage source={{ uri: item.image }} />
          </S.ProductImageContainer>

          <S.ProductInfo>
            <S.ProductTitle numberOfLines={1}>{item.title}</S.ProductTitle>

            <S.ProductValueContainer>
              <S.ProductQuantity>{`${item.quantity ?? 1}x`}</S.ProductQuantity>
              <S.ProductValue>{`$${item.price}`}</S.ProductValue>
            </S.ProductValueContainer>
          </S.ProductInfo>
        </S.ProdutCardWrapper>

        <S.ProductSelectorContainer>
          <S.ProductSelector
            activeOpacity={0.7}
            onPress={() => handleDecrementQuantity(item)}
          >
            <S.ProductReduceButton />
          </S.ProductSelector>
          <S.ProductSelector
            right
            activeOpacity={0.7}
            onPress={() => handleIncrementQuantity(item)}
          >
            <S.ProductAddButton fill={theme.colors.black.shadeOne} />
          </S.ProductSelector>
        </S.ProductSelectorContainer>
      </S.ProductCard>
    );
  }

  return (
    <>
      <S.Container>
        <S.CartWrapper>
          <S.Header>
            <S.GoBackContainer activeOpacity={0.7} onPress={handleGoBack}>
              <S.GoBackIcon />
            </S.GoBackContainer>

            <S.HeaderTitle>CARRINHO</S.HeaderTitle>

            <S.RightSide />
          </S.Header>

          <S.SectionTitle>Meu Carrinho</S.SectionTitle>
        </S.CartWrapper>

        <S.ProductsList
          data={cart.products}
          ListEmptyComponent={
            <S.EmptyCartContainer>
              <S.EmptyCartIcon />
              <S.EmptyCartTitle>
                NENHUM ITEM ADICIONADO NO CARRINHO.
              </S.EmptyCartTitle>
              <S.EmptyCartButton
                activeOpacity={0.7}
                onPress={handleNavigateToHome}
              >
                <S.EmptyCartButtonText>ADICIONAR ITENS</S.EmptyCartButtonText>
              </S.EmptyCartButton>
            </S.EmptyCartContainer>
          }
          renderItem={({ item }) => renderProduct(item)}
        />

        {cart.products.length > 0 && (
          <S.Footer>
            <S.Divider />
            <S.TotalContainer>
              <S.TotalTitle>Total:</S.TotalTitle>
              <S.TotalValue>{`$${cart.total.toFixed(2)}`}</S.TotalValue>
            </S.TotalContainer>
            <S.Divider />

            <S.CheckoutButton
              activeOpacity={0.7}
              onPress={handleNavigateToCheckoutSuccess}
            >
              <S.CheckoutButtonText>FINALIZAR COMPRA</S.CheckoutButtonText>
            </S.CheckoutButton>
          </S.Footer>
        )}
      </S.Container>

      <Modal
        visible={isModalVisible}
        handleDismissModal={handleDismissModal}
        handleRemoveItem={handleRemoveItem}
      />
    </>
  );
}
