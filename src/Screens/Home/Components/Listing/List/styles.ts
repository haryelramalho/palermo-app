import styled from 'styled-components/native';

export const Container = styled.View``;

export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.type.worksans.semibold} })};
  font-size: 24px;

  margin-bottom: 32px;
`;

export const RowContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;
