import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import {
    FormInput
} from './form-components';



export const AccountDetails = (
  <div>
  <h1>Let's Complete Your Registration (Step 1)</h1>
    <Field
      key={'userName'}
      id={'userName'}
      name={'userName'}
      label={'Username'}
      component={FormInput}
      
        />
   
  </div>
);
