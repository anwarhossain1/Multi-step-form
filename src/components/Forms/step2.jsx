import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import {
    FormInput
} from './form-components';



export const Profile = (
  <div>
  <h1>Profile (Step 2)</h1>
    <Field
      key={'userName'}
      id={'userName'}
      name={'userName'}
      label={'Username'}
      component={FormInput}
      
        />
         <Field
      key={'userName'}
      id={'userName'}
      name={'Age'}
      label={'Age'}
      component={FormInput}
      
        />
   
  </div>
);
