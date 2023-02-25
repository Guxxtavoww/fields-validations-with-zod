import styled from 'styled-components';
import { Form } from '@unform/web';

export const FormContainer = styled(Form)`
  position: relative;
  width: 100%;
  padding: 1rem;
  display: grid;
  place-items: center;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;

  & > * {
    flex: 1;
  }
`;
