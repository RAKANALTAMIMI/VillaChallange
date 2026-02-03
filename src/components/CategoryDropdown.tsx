import { INVESTMENT_CATEGORIES, type CategoryType } from '../utility/categories';
import './CategoryDropdown.css';

type Props = {
  value: CategoryType;
  onChange: (category: CategoryType) => void;
};

const CategoryDropdown = ({ value, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as CategoryType);
  };

  return (
    <select 
      className="category-dropdown"
      value={value}
      onChange={handleChange}
    >
      {INVESTMENT_CATEGORIES.map((category) => (
        <option key={category.value} value={category.value}>
          {category.label}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;