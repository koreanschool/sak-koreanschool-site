export enum FormTypes {
	INPUT,
	DROPDOWN,
	RADIO
};

export interface FormItemProps {
	controlId: string
	label: string
	placeholder: string
	required: boolean
	boldLabel?: boolean
	formType: FormTypes
	options?: string[]				// mutli use for radio buttons and dropdowns
	gridWidthNumber: number			// grid number for bootstrap grid system
	onChange: (e: Event) => void
};

export interface FormStepProps {
	formItems: FormItemProps[],
	updateData: (controlId: string, answer: string | string[]) => void
	submit: () => void
}