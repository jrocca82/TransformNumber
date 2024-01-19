import { TransformReturnType } from "@/types/Transform";
import axios, { AxiosResponse } from "axios";
import { ChangeEvent, useState } from "react";

export const useTransform = () => {
	const [value, setValue] = useState<number>();
	const [errorMessage, setErrorMessage] = useState<string>();
	const [returnValue, setReturnValue] = useState<string>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(parseFloat(e.target.value));
	};

	const handleSubmit = async () => {
		// Reset previous values
		setErrorMessage(undefined);
		setReturnValue(undefined);

		// Set loading state
		setIsLoading(true);

		// Check value has been given
		if (!value) {
			setErrorMessage("Please input a value!");
			setIsLoading(false);
			return;
		}

		// Send value to API
		try {
			const {
				data: serverResponse,
			}: AxiosResponse<TransformReturnType, string> = await axios.post(
				`/api/transform`,
				{
					input: value,
				}
			);
			setReturnValue(serverResponse.transformed);
		} catch (e) {
			console.error(e);
			setErrorMessage("Failed to transform 😭");
		}

		// Reset loading state
		setIsLoading(false);
	};

	return {
		handleSubmit,
		value,
		handleChange,
		errorMessage,
		returnValue,
		isLoading,
	};
};
