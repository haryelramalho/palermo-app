/* eslint-disable react/no-unused-prop-types */
import React from 'react';

import theme from '../../../../Global/Styles/theme';
import * as S from './styles';

type ModalProps = {
  handleDismissModal: () => void;
  handleRemoveItem: () => void;
  visible: boolean;
};

export default function Modal({
  visible,
  handleDismissModal,
  handleRemoveItem,
}: ModalProps) {
  return (
    <S.ModalContainer
      hideModalContentWhileAnimating
      backdropColor={theme.colors.gray.shadeTen}
      backdropOpacity={0.75}
      animationIn="fadeInUp"
      animationOut="fadeOut"
      animationInTiming={300}
      animationOutTiming={400}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={0}
      isVisible={visible}
    >
      <S.ModalContent>
        <S.ModalTitle>Remover Item</S.ModalTitle>

        <S.ModalDescription>
          Se deseja remover o item do carrinho clique em prosseguir.
        </S.ModalDescription>

        <S.ModalDivider />

        <S.ModalButton onPress={handleRemoveItem}>
          <S.ModalButtonButtonText color={theme.colors.blue.shadeOne}>
            PROSSEGUIR
          </S.ModalButtonButtonText>
        </S.ModalButton>

        <S.ModalDivider />

        <S.ModalButton>
          <S.ModalButtonButtonText
            color={theme.colors.red.shadeOne}
            onPress={handleDismissModal}
          >
            CANCELAR
          </S.ModalButtonButtonText>
        </S.ModalButton>
      </S.ModalContent>
    </S.ModalContainer>
  );
}
