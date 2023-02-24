import { useRef, useCallback, Suspense } from 'react';
import { CircularProgress, Button } from '@mui/material';
import { FormHandles } from '@unform/core';

import validateFormFields from '@/utils/validateFormFields';
import { iDynamicFormProps } from './types';
import { FormContainer, InputsWrapper } from './styles';
import { handleRenderInputs } from './helpers';

function DynamicForm<T>(props: iDynamicFormProps<T>): JSX.Element {
  const { inputs, children, onSubmit, schema, formRef: propsRef } = props;

  const ownRef = useRef<FormHandles>(null);
  const formRef = propsRef || ownRef;

  const handleFormSubmit = useCallback(
    (data: T) => {
      if (schema) {
        validateFormFields<T>(schema, data, errors => {
          errors.issues.forEach(error => {
            formRef.current?.setFieldError(
              String(error.path[0]),
              error.message
            );
          });
        });
      }
      onSubmit(data);
    },
    [schema, onSubmit, formRef]
  );

  return (
    <FormContainer onSubmit={handleFormSubmit} ref={formRef}>
      <Suspense fallback={<CircularProgress />}>
        {inputs ? (
          <InputsWrapper>
            {inputs.map((element, index) =>
              handleRenderInputs<T>(element, index)
            )}
            <Button type="submit">Enviar</Button>
          </InputsWrapper>
        ) : null}
        {children && children}
      </Suspense>
    </FormContainer>
  );
}

export default DynamicForm;
