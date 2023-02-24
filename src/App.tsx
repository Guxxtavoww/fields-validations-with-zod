import React, { useEffect, useState } from 'react';
import { z } from 'zod';

import { DynamicForm } from './components';
import GlobalStyles from './styles/global';

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10),
});

type Form = z.infer<typeof LoginFormSchema>;

const App: React.FC = () => {
  return (
    <>
      <div className="app_wrapper">
        <DynamicForm<Form>
          onSubmit={data => console.log({ onSumitData: data })}
          schema={LoginFormSchema}
          inputs={[
            { input_name: 'email', type: 'email', label: 'E-mail' },
            { input_name: 'password', type: 'password', label: 'Senha' },
          ]}
        />
      </div>
      <GlobalStyles />
    </>
  );
};

export default App;
