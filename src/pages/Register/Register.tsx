import React, { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';

export const Register = () => {
	const [registrationData, setRegistrationData] = useState<{ [idx: string]: string | string[] }>({});

	const updateData = (
		controlId: string,
		answer: string | string[]
	) => {
		let newRegistrationData = cloneDeep(registrationData);
		newRegistrationData[controlId] = answer;
		setRegistrationData(newRegistrationData);
	}

	const submit = () => {

	}


}
