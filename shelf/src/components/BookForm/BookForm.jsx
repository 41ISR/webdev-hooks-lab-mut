import { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './BookForm.css';

export default function BookForm({ onAdd }) {
  const [draft, setDraft] = useState('');

  const submit = () => {
    if (!draft.trim()) return;
    onAdd(draft);
    setDraft('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submit();
    }
  };

  return (
    <form className="add-book-row" onSubmit={handleSubmit}>
      <Input
        value={draft}
        onChange={setDraft}
        onKeyDown={handleKeyDown}
        placeholder="Сюда пиши"
      />
      <Button type="submit">Поставь на место</Button>
    </form>
  );
}