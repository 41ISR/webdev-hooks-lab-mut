import BookItem from '../BookItem/BookItem';
import './BookList.css';

export default function BookList({ books, onToggleRead, onDelete }) {
  if (books.length === 0) {
    return <div className="empty-note">Ну нету</div>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onToggleRead={onToggleRead}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}