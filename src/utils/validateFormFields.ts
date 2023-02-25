import { z } from 'zod';

export const errorMap: z.ZodErrorMap = (error, ctx) => {
  const customValidation =
    'validation' in error ? String(error.validation) : error;

  switch (customValidation) {
    case 'email':
      return { message: 'Email inválido' };
    case 'url':
      return {
        message: 'Insira um link válido',
      };
  }

  if (error.code === 'too_small') {
    return { message: `Insira ${error.minimum} ou mais caracteres` };
  } else if (error.code === 'too_big') {
    return { message: `Insira até ${error.maximum} caracteres` };
  }

  return { message: ctx.defaultError };
};

export interface iFunctionResponse {
  succeded: boolean;
}

export default function validateFormFields<T>(
  schema: z.Schema<T>,
  fields: T,
  callBack?: (error: z.ZodError<T>) => void | Promise<void>
): iFunctionResponse {
  try {
    schema.parse(fields, { errorMap });
    return { succeded: true };
  } catch (err) {
    if (err instanceof z.ZodError<T>) {
      if (callBack) {
        callBack(err);
        return { succeded: false };
      }
      return { succeded: false };
    }
    throw new Error(JSON.stringify(err));
  }
}
