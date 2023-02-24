import { useRef, useCallback, Suspense } from 'react';
import { CircularProgress, Button } from '@mui/material';
import { FormHandles } from '@unform/core';

import { setFieldValue } from '@/utils/formFunctions';
import validateFormFields from '@/utils/validateFormFields';

import { FormContainer, InputsWrapper } from './styles';
import { handleRenderInputs } from './helpers';
import { iDynamicFormProps } from './types';

function DynamicForm<T>(props: iDynamicFormProps<T>): JSX.Element {
  const { inputs, children, onSubmit, schema, formRef: propsRef } = props;

  const ownRef = useRef<FormHandles>(null);
  const formRef = propsRef || ownRef;

  const clearInputsErrors = useCallback(() => {
    inputs?.forEach(input =>
      setFieldValue<T>(formRef, {
        fieldName: input.input_name,
        value: '',
        isError: true,
      })
    );
  }, [inputs]);

  const handleFormSubmit = useCallback(
    async (data: T) => {
      clearInputsErrors();

      if (schema) {
        const parsedSucessuly = validateFormFields<T>(schema, data, errors => {
          errors.issues.forEach(error => {
            const path = String(error.path[0]);

            setFieldValue<T>(formRef, {
              fieldName: path as keyof T,
              value: error.message,
              isError: true,
            });
          });
        });

        return parsedSucessuly.succeded ? await onSubmit(data) : null;
      }

      return await onSubmit(data);
    },
    [schema, onSubmit, formRef, clearInputsErrors]
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
