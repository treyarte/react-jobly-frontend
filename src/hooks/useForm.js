import { useState } from 'react';

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const resetFormData = () => {
    setFormData(initialState);
  };
  return [formData, handleChange, resetFormData];
};

export default useForm;
