import React, { useEffect } from 'react';
import { z } from 'zod';

import validateFormFields from './utils/validateFormFields';

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type Form = z.infer<typeof LoginFormSchema>;

const App: React.FC = () => {
  useEffect(() => {
    validateFormFields<Form>(LoginFormSchema, {
      email: 'fodase',
      password: 'sadasdasd',
    });
  }, []);

  return (
    <div className="app_wrapper">
      <div className="test">oi</div>
    </div>
  );
};

export default App;
