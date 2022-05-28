import menu from 'data/menu.json';
import styles from './Items.module.scss';
import { Item } from './Item';
import { useEffect, useState } from 'react';
import { MenuRestaurant } from 'types/Dish';

interface ItemsProps {
  search: string;
  filter: number | null;
  orderBy: string;
}

export function Items(props: ItemsProps) {
  const [list, setList] = useState(menu);
  const { search, filter, orderBy } = props;

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function sortPropertyAscending(list: MenuRestaurant, property: 'size' | 'serving' | 'price') {
    return list.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  }

  function sortItems(newList: MenuRestaurant) {
    switch (orderBy) {
      case 'porcao': {
        return sortPropertyAscending(newList, 'size');
      }
      case 'qtd_pessoas': {
        return sortPropertyAscending(newList, 'serving');
      }
      case 'preco': {
        return sortPropertyAscending(newList, 'price');
      }
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter((item) => testSearch(item.title) && testFilter(item.category.id));
    setList(sortItems(newList));
  }, [search, filter, orderBy]);

  return (
    <div className={styles.items}>
      {list.map((item, index) => (
        <Item key={item.id} index={index} item={item} />
      ))}
    </div>
  );
}
