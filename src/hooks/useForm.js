import { useState } from 'react';

function useForm(initialValue) {
  const [values, setValues] = useState(initialValue);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(evento) {
    setValue(
      evento.target.getAttribute('name'),
      evento.target.value,
    );
  }

  function clearForm() {
    setValues(initialValue);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}
export default useForm;

/* const { handleChange, values, clearForm } = useForm(initialValue);
 */
