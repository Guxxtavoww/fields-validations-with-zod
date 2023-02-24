import React, { useCallback } from 'react';
import { z } from 'zod';

import { DynamicForm } from './components';

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10),
});

type Form = z.infer<typeof LoginFormSchema>;

const App: React.FC = () => {
  return (
    <div className="app_wrapper">
      <DynamicForm<Form>
        onSubmit={data => console.log({ data })}
        schema={LoginFormSchema}
        inputs={[
          {
            input_name: 'email',
            type: 'text',
            label: 'E-mail',
            placeholder: 'Seu E-mail',
          },
          {
            input_name: 'password',
            type: 'password',
            label: 'Senha',
            placeholder: 'Sua Senha',
            clearErrorOnKeyDown: true,
          },
        ]}
      />
    </div>
  );
};

export default App;
