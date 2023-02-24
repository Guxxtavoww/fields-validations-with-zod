import styled from 'styled-components';
import { Form } from '@unform/web';

export const FormContainer = styled(Form)`
  position: relative;
  width: 100%;
  padding: 1rem;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    flex: 1;
  }
`;
