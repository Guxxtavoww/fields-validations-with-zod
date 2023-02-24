/* eslint-disable indent */
import styled from 'styled-components';

export const InputContainer = styled.div`
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
    border: 1px solid #b5b5c3;
    font-size: 13px;
    transition: 0.2s ease;
    background: transparent;
    color: #555555;

    &::placeholder {
      font-size: 13px;
      line-height: 45px;
      font-weight: 400;
      color: #b5b5c3;
    }

    &:focus {
      border-color: #0d0d0d;
    }

    &:disabled {
      opacity: 0.4 !important;
      cursor: not-allowed !important;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const InputLabel = styled.label`
  font-size: 12px;
  color: #0d0d0d;
  font-weight: 400;
  text-transform: capitalize;
`;
