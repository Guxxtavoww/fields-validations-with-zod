/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable indent */
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

  return { message: ctx.defaultError };
};

export default function validateFormFields<CurrentSchema>(
  schema: z.Schema<CurrentSchema>,
  fields: CurrentSchema
) {
  try {
    throw schema.parse(fields, { errorMap });
  } catch (err) {
    if (err instanceof z.ZodError<CurrentSchema>) {
      console.log(err.issues);
      return err;
    }

    return err as z.ZodError<CurrentSchema>;
  }
}
