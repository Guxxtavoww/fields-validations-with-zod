import React, { useEffect } from 'react';
import { z } from 'zod';

import validateFormFields from './utils/validateFormFields';

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10),
});

type Form = z.infer<typeof LoginFormSchema>;

const App: React.FC = () => {
  useEffect(() => {
    validateFormFields<Form>(
      LoginFormSchema,
      {
        email: 'fodase',
        password: 'sads',
      },
      errors => console.log(errors.issues.map(error => ({ message: error.message })))
    );
  }, []);

  return (
    <div className="app_wrapper">
      <div className="test">oi</div>
    </div>
  );
};

export default App;
