import { useState, useEffect } from 'react';
import ShelfScreen from './pages/ShelfScreen/ShelfScreen';

const STORAGE_KEY = 'shelf-books';

function loadBooks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialBooks;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : initialBooks;
  } catch {
    return initialBooks;
  }
}

export default function App() {
  const [books, setBooks] = useState(loadBooks);
  const [showOnlyUnread, setShowOnlyUnread] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  useEffect(() => {
    document.title = showOnlyUnread
      ? 'Shelf — нет'
      : 'Shelf — личный самолет у меня';
  }, [showOnlyUnread]);

  const handleAdd = (title) => {
    setBooks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: title.trim(),
        author: 'не понятно',
        read: false,
      },
    ]);
  };

  const handleToggleRead = (id) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    );
  };

  const handleDelete = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const handleToggleFilter = (checked) => {
    setShowOnlyUnread(checked);
  };

  return (
    <div className="app">
      <ShelfScreen
        books={books}
        showOnlyUnread={showOnlyUnread}
        onAdd={handleAdd}
        onToggleRead={handleToggleRead}
        onDelete={handleDelete}
        onToggleFilter={handleToggleFilter}
      />
    </div>
  );
}