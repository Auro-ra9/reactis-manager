import { FormInputs } from "../types/FormInputs";

export const validateForm = (data: FormInputs) => {
  const { title, description } = data;

  if (!title?.trim() || title.length < 2) {
    return { isValid: false, message: "Title must be at least 2 characters long." };
  }
  if (title.length > 100) {
    return { isValid: false, message: "Title must not exceed 100 characters." };
  }
  if (!description?.trim() || description.length < 5) {
    return { isValid: false, message: "Description must be at least 5 characters long." };
  }
  if (description.length > 200) {
    return { isValid: false, message: "Description must not exceed 200 characters." };
  }

  return { isValid: true, message: "" };
};
