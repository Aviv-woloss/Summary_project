import "./CategoryFilter.css";

function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="filter-container">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
          onClick={() => onSelect(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
export default CategoryFilter;