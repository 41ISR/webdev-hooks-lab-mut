import './FilterChip.css';

export default function FilterChip({ checked, onChange, label }) {
  return (
    <div className="filter-chip">
      <input
        type="checkbox"
        id="filterCheckbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor="filterCheckbox">
        <span className="dot"></span>
        {label}
      </label>
    </div>
  );
}