import './BookItem.css';

const COVER_COLORS = ['#4f6b52', '#7a4a3a', '#4a5a7a', '#6b4f7a', '#8a6a2a'];

function pickCoverColor(id) {
  const str = String(id);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash + str.charCodeAt(i)) % COVER_COLORS.length;
  }
  return COVER_COLORS[hash];
}

function pickCoverLetter(title) {
  return title.trim().charAt(0).toUpperCase() || '?';
}

export default function BookItem({ book, onToggleRead, onDelete }) {
  const { id, title, author, read } = book;

  return (
    <div className="book-row">
      <div
        className="book-cover"
        style={{ background: pickCoverColor(id) }}
        aria-hidden="true"
      >
        {pickCoverLetter(title)}
      </div>

      <div className="book-info">
        <p className={`book-title${read ? ' done' : ''}`}>{title}</p>
        <div className="book-author">{author}</div>
      </div>

      <div
        className={`read-check${read ? ' checked' : ''}`}
        onClick={() => onToggleRead(id)}
        role="button"
        tabIndex={0}
      >
        <span className="check-circle">✓</span>
        <span className="read-label">Съедено</span>
      </div>

      <button
        className="delete-btn"
        onClick={() => onDelete(id)}
        title="Убирай"
      >
        ✕
      </button>
    </div>
  );
}