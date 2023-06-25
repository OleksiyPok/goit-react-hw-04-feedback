import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  min-width: 100px;
  border: solid 1px darkblue;
  border-radius: 4px;
  cursor: pointer;
  text-transform: capitalize;
`;
