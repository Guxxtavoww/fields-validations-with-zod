import React from 'react';
import { z } from 'zod';

import { DynamicForm } from './components';

const LoginFormSchema = z.object({
  email: z.string().email(), // { message: 'Email inválido' }
  password: z.string().min(5),
  url: z.string().url(),
});

type Form = z.infer<typeof LoginFormSchema>;

const App: React.FC = () => {
  return (
    <div className="app_wrapper">
      <DynamicForm<Form>
        onSubmit={data => alert(JSON.stringify(data))}
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
          {
            input_name: 'url',
            type: 'text',
            label: 'Url',
            placeholder: 'Url'
          }
        ]}
      />
    </div>
  );
};

export default App;
