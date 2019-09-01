import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Finish from './Finish';
import useSteps from './useSteps';
import useRegistration from './useRegistration';

import { Container } from 'react-bootstrap';
import useStudents from './useStudents';

const Register = () => {
	const { step, addCurrentStep, backCurrentStep } = useSteps();
	const { registration, setRegistration } = useRegistration();
	const { students, setStudents } = useStudents();

	return (
		<Container style={{ marginTop: '50px' }}>
			<h1>Registration</h1>
			<h4>2019</h4>
			<br></br>
			<Container style={{ backgroundColor: '#eee', borderRadius: '7px', padding: '20px' }}>
				{
					step === undefined && <p>Loading...</p>
				}
				{
					step === 1 && <Step1
						steps={{ step, addCurrentStep, backCurrentStep }}
						registrations={{ registration, setRegistration }}>
					</Step1>
				}
				{
					step === 2 && <Step2
						steps={{ step, addCurrentStep, backCurrentStep }}
						studentList={{ students, setStudents }}>
					</Step2>
				}
				{
					step === 3 && <Finish
						steps={{ step, addCurrentStep, backCurrentStep }}
						registrations={{ registration, setRegistration }}
						studentList={{ students, setStudents }}>
					</Finish>
				}
			</Container>
		</Container>
	)
}

export default Register;