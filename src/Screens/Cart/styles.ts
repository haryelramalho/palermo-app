import styled, { css } from 'styled-components/native';

import ArrowLeftIcon from '../../Assets/Svgs/arrow-left.svg';
import ReduceIcon from '../../Assets/Svgs/reduce-icon.svg';
import AddIcon from '../../Assets/Svgs/add-icon.svg';
import EmptyIcon from '../../Assets/Svgs/empty-cart-icon.svg';

type ProductSelectorProps = {
  right?: boolean;
};

export const Container = styled.SafeAreaView`
  flex: 1;

  justify-content: space-between;

  margin: 0 20px;
`;

export const CartWrapper = styled.View``;

export const Header = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const GoBackContainer = styled.TouchableOpacity`
  height: 44px;
  width: 44px;

  z-index: 99;

  justify-content: center;
`;

export const GoBackIcon = styled(ArrowLeftIcon)``;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.bold};
  font-size: ${({ theme }) => theme.fonts.size.medium}px;

  color: ${({ theme }) => theme.colors.gray.shadeOne};
`;

export const RightSide = styled.View`
  margin-right: 44px;
`;

export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.semibold} })};
  font-size: 24px;

  margin-bottom: 45px;
  margin-top: 30px;
`;

export const ProductsList = styled.FlatList``;

export const ProductCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.purple.shadeTwo};

  padding: 11px 9px;

  margin-bottom: 16px;
`;

export const ProdutCardWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImageContainer = styled.View`
  shadow-offset: 0px 3px;
  shadow-radius: 3px;
  shadow-color: #0005;
  shadow-opacity: 0.7;

  elevation: 5;
`;

export const ProductImage = styled.Image`
  height: 50px;
  width: 38px;

  border-radius: 10px;

  margin-right: 12px;
`;

export const ProductInfo = styled.View`
  flex-direction: column;
`;

export const ProductTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.bold} })};
  font-size: 16px;

  width: 150px;
`;

export const ProductValueContainer = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const ProductQuantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.bold} })};
  font-size: 12px;

  color: ${({ theme }) => theme.colors.purple.shadeOne};
`;

export const ProductValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.bold} })};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.purple.shadeOne};

  margin-left: 4px
`;

export const ProductSelectorContainer = styled.View`
  flex-direction: row;
`;

export const ProductSelector = styled.TouchableOpacity<ProductSelectorProps>`
  height: 28px;
  width: 36px;

  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;

  ${({ right }) =>
    right &&
    css`
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;

      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}

  align-items: center;
  justify-content: center;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray.shadeTwo};
`;

export const ProductReduceButton = styled(ReduceIcon)``;
export const ProductAddButton = styled(AddIcon)``;

export const Footer = styled.View``;

export const TotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalTitle = styled.Text`
  padding: 12px;

  font-family: ${({ theme }) => theme.fonts.type.worksans.bold} })};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray.shadeNine};
`;

export const TotalValue = styled.Text`
  padding: 12px;

  font-family: ${({ theme }) => theme.fonts.type.worksans.bold} })};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.black.shadeOne};
`;

export const Divider = styled.View`
  height: 1px;

  margin: 0px -32px;

  border-radius: 20px;

  background: ${({ theme }) => theme.colors.gray.shadeThree};
`;

export const CheckoutButton = styled.TouchableOpacity`
  height: 50px;

  background-color: ${({ theme }) => theme.colors.purple.shadeThree};

  align-items: center;
  justify-content: center;

  border-radius: 37px;

  margin: 30px 30px 0 30px;
`;

export const CheckoutButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.bold} })};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.white.shadeOne}
`;

export const EmptyCartContainer = styled.View`
  flex: 1;

  align-self: center;

  margin-top: 120px;

  align-items: center;
`;

export const EmptyCartIcon = styled(EmptyIcon)`
  margin-bottom: 12px;
`;

export const EmptyCartTitle = styled.Text`
  width: 200px;

  text-align: center;

  font-family: ${({ theme }) => theme.fonts.type.worksans.bold} })};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray.shadeFive};
`;

export const EmptyCartButton = styled.TouchableOpacity`
  border-radius: 37px;

  margin-top: 14px;

  background-color: ${({ theme }) => theme.colors.purple.shadeOne};
`;

export const EmptyCartButtonText = styled.Text`
  padding: 10px 93px;

  font-family: ${({ theme }) => theme.fonts.type.worksans.bold} })};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.white.shadeOne};
`;
