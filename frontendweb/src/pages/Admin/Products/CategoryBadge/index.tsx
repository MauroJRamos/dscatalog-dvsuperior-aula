import './styles.css';

type Props = {
  name: string;
};

const CategoryBadge = ({ name }: Props) => {
  return <h4 className="category-badge-container">{name}</h4>;
};

export default CategoryBadge;
