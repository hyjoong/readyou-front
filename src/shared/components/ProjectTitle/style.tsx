import { styled } from 'styled-components';

export const InputBox = styled.div`
  width: 82.9rem;
  height: 8.4rem;

  background: ${(props) => props.theme.colors.lightgray};
  border-radius: 0 0 1rem 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  font-family: 'Pretendard';
  font-size: 1.4rem;
  box-shadow: none;
  outline: none;
  border: none;
  appearance: none;

  width: 79.7rem;
  height: 5.2rem;

  background: #ffffff;
  border-radius: 1rem;

  padding: 1.6rem 2.4rem 1.6rem 2rem;

  &::placeholder {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.gray};
  }
`;
