import { z } from 'zod';

export const errorMap: z.ZodErrorMap = (error, ctx) => {
  const customValidation =
    'validation' in error ? String(error.validation) : error;

  switch (customValidation) {
    case 'email':
      return { message: 'Email inválido' };
    case 'url':
      return {
        message: 'Insira um link (url) válido(a)',
      };
    case 'datetime':
      return { message: 'Data inválida' };
  }

  if (error.code === 'too_small') {
    return { message: `Insira ${error.minimum} ou mais caracteres` };
  } else if (error.code === 'too_big') {
    return { message: `Insira até ${error.maximum} caracteres` };
  }

  return { message: ctx.defaultError };
};

type Unsuccessful = { succeded: false; formatedData: null };
type Succeded<T> = { succeded: true; formatedData: T };

type ValidationResponse<T> = Succeded<T> | Unsuccessful;

export default function validateFormFields<T>(
  schema: z.Schema<T>,
  fields: T,
  callBack?: (error: z.ZodError<T>) => void | Promise<void>,
): ValidationResponse<T> {
  try {
    const parsedData = schema.parse(fields, { errorMap });
    return { succeded: true, formatedData: parsedData };
  } catch (err) {
    if (err instanceof z.ZodError) {
      if (callBack) callBack(err);

      return { succeded: false, formatedData: null };
    }
    throw new Error(JSON.stringify(err));
  }
}
