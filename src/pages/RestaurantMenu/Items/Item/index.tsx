import styles from './Item.module.scss';
import classNames from 'classnames';
import { Dish } from 'types/Dish';
import { DishTags } from 'components/DishTags';
import { useNavigate } from 'react-router-dom';

type ItemProps = {
  item: Dish;
  index: number;
};

export function Item(props: ItemProps) {
  const { id, title, description, photo } = props.item;
  const navigate = useNavigate();

  return (
    <div
      className={classNames({
        [styles.item]: true,
        [styles['item__even']]: props.index % 2 === 0,
      })}
      onClick={() => navigate(`/prato/${id}`)}
    >
      <div className={styles.item__image}>
        <img src={photo} alt="image" />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <DishTags {...props.item} />
      </div>
    </div>
  );
}
