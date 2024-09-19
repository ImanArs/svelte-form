export interface InputProps {
  placeholder: string;
  value: string;
  name: string;
  id: string;
}

export let placeholder: InputProps['placeholder'] = "Enter text";
export let value: InputProps['value'] = "";
export let name: InputProps['name'] = "";
export let id: InputProps['id'] = "";

export function validateInput(value: string): boolean {
  return value.trim().length > 0;
}