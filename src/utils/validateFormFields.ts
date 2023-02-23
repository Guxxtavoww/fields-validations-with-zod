/* eslint-disable indent */
import { z } from 'zod';

export const errorMap: z.ZodErrorMap = (error, ctx) => {
  console.log({ errorMapError: error });
  switch (error.code) {
    case z.ZodIssueCode.invalid_type:
      if (error.expected === 'string') {
        return { message: 'Insira texto válido' };
      }
      break;
    case z.ZodIssueCode.custom:
      const params = error.params || {};
      if (params.myField) {
        return { message: `Bad input: ${params.myField}` };
      }
      break;
  }

  return { message: ctx.defaultError };
};

export default function validateFormFields<CurrentSchema>(
  schema: z.Schema<CurrentSchema>,
  fields: CurrentSchema
) {
  try {
    const parsedData = schema.safeParse(fields, { errorMap });
    const errors = parsedData.success ? {} : parsedData.error.format();

    console.log({ errors });

    return errors;
  } catch (err) {
    if (err instanceof z.ZodError<CurrentSchema>) {
      return err;
    }
    console.log('Erro');
  }
}
