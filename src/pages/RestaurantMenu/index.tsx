import styles from './RestaurantMenu.module.scss';
import stylesTheme from 'styles/Theme.module.scss';

import { SearchEngine } from 'pages/RestaurantMenu/SearchEngine';
import { useState } from 'react';
import { OptionFilters } from 'pages/RestaurantMenu/OptionFilters';
import { Select } from './Select';
import { Items } from './Items';

export type OptionsOrderBy = '' | 'porcao' | 'qtd_pessoas' | 'preco';

export function RestaurantMenu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [orderBy, setOrderBy] = useState<OptionsOrderBy>('');

  return (
    <section className={styles.menu}>
      <h3 className={stylesTheme.title}>Cardápio</h3>
      <SearchEngine search={search} setSearch={setSearch} />
      <div className={styles.menu__filter}>
        <OptionFilters filter={filter} setFilter={setFilter} />
        <Select orderBy={orderBy} setOrderBy={setOrderBy} />
      </div>
      <Items search={search} filter={filter} orderBy={orderBy} />
    </section>
  );
}
