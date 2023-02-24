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
  }

  if (error.code === 'too_big') {
    return { message: `Insira até ${error.maximum} caracteres` };
  }

  return { message: ctx.defaultError };
};

export default function validateFormFields<T>(
  schema: z.Schema<T>,
  fields: T,
  callBack?: (error: z.ZodError<T>) => void
) {
  try {
    throw schema.parse(fields, { errorMap });
  } catch (err) {
    if (err instanceof z.ZodError<T>) {
      // console.log(err.issues);
      if (callBack) return callBack(err);
      return err;
    }

    throw err;
  }
}
