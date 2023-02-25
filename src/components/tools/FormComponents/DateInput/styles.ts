import styled from 'styled-components';

export const DateInputContainer = styled.div<{ hasError: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  .input-wrapper {
    position: relative;
    width: 100%;
    height: 38px;
    display: flex;
    border-radius: 5px;
    input {
      flex: 1;
      height: fit-content;
      line-height: 64px;
      border-radius: 5px;
      padding: 0 8px !important;
      font-size: 13px;
      overflow: auto;
      transition: 0.2s ease;

      &::placeholder {
        font-size: 13px;
        line-height: 45px;
        font-weight: 400;
        color: #b5b5c3;
      }
      &:focus,
      &:hover {
        border-color: ${props => (props.hasError ? '#e12325' : '#0095e8')};
      }
      &::-webkit-calendar-picker-indicator {
        background: transparent;
        bottom: 0;
        color: transparent;
        cursor: pointer;
        height: auto;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
      }
    }
    .icon {
      width: 40px;
      height: 100%;
      position: absolute;
      right: 5px;
      display: grid;
      place-items: center;
      z-index: 1;
      cursor: pointer;
    }
  }
`;
