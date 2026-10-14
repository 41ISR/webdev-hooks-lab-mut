import BookForm from '../../components/BookForm/BookForm';
import BookList from '../../components/BookList/BookList';
import FilterChip from '../../components/FilterChip/FilterChip';
import './ShelfScreen.css';

export default function ShelfScreen({
  books,
  showOnlyUnread,
  onAdd,
  onToggleRead,
  onDelete,
  onToggleFilter,
}) {
  const visibleBooks = showOnlyUnread
    ? books.filter((book) => !book.read)
    : books;

  return (
    <div className="screen">
      <div className="app-header">
        <div className="brand">
          <div className="brand-name">Книга братан</div>
        </div>
      </div>

      <BookForm onAdd={onAdd} />

      <div className="list-toolbar">
        <span className="toolbar-title">руко-писи</span>
        <FilterChip
          checked={showOnlyUnread}
          onChange={onToggleFilter}
          label="Только не съеденное"
        />
      </div>

      <BookList
        books={visibleBooks}
        onToggleRead={onToggleRead}
        onDelete={onDelete}
      />
    </div>
  );
}