import styled from 'styled-components';

const handleErrorColors = (hasError: boolean) =>
  !hasError ? '#b5b5c3' : '#e12325';

export const InputContainer = styled.div<{ hasError: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  min-height: 80px;

  input {
    flex: 1;
    max-height: 35px;

    padding: 5px 10px;
    border-radius: 6px;
    border: 1px solid ${props => handleErrorColors(props.hasError)};
    font-size: 13px;
    transition: 0.25s ease;
    background: transparent;
    color: #555555;

    &::placeholder {
      font-size: 13px;
      line-height: 45px;
      font-weight: 400;
      color: #b5b5c3;
    }

    &:focus {
      border-color: ${props => handleErrorColors(props.hasError)};
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
