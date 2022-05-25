import styles from './Item.module.scss';
import menu from '../items.json';
import classNames from 'classnames';

type ItemProps = {
  item: typeof menu[0];
  index: number;
};

export function Item(props: ItemProps) {
  const { title, description, category, size, serving, price, photo } = props.item;
  return (
    <div
      className={classNames({
        [styles.item]: true,
        [styles['item__even']]: props.index % 2 === 0,
      })}
    >
      <div className={styles.item__image}>
        <img src={photo} alt="image" />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div className={classNames(styles.item__type, styles[`item__type__${category.label.toLowerCase()}`])}>
            {category.label}
          </div>
          <div className={styles.item__size}>{size}</div>
          <div className={styles.item__qtpeople}>
            Serve {serving} pessoa{serving > 1 ? 's' : ''}
          </div>
          <div className={styles.item__price}>R$ {price.toFixed(2).replace('.', ',')}</div>
        </div>
      </div>
    </div>
  );
}
