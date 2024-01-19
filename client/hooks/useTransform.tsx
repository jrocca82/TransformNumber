import { TransformReturnType } from "@/types/Transform";
import axios, { AxiosResponse } from "axios";
import { ChangeEvent, useState } from "react";

export const useTransform = () => {
	const [value, setValue] = useState<number>();
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [returnValue, setReturnValue] = useState<string>("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(parseFloat(e.target.value));
		console.log(parseFloat(e.target.value));
	};

	const handleSubmit = async () => {
		if (!value) {
			return;
		}
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
	};

	return { handleSubmit, value, handleChange, errorMessage, returnValue };
};
