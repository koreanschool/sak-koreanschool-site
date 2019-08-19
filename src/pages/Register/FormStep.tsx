import React from 'react';
import { FormStepProps } from './RegistrationDefinitions';
import { FormItem } from './FormItem';

export const FormStep: React.FC<FormStepProps> = ({ formItems }) => {
	return <>
		{formItems.map(formItem => <FormItem {...formItem} key={formItem.controlId} />)}
	</>
}