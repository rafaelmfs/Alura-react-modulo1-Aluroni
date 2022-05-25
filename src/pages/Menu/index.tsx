import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { SearchEngine } from 'pages/Menu/SearchEngine';
import { useState } from 'react';
import { OptionFilters } from 'pages/Menu/OptionFilters';
import { Select } from './Select';
import { Items } from './Items';

export type OptionsOrderBy = '' | 'porcao' | 'qtd_pessoas' | 'preco';

export function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [orderBy, setOrderBy] = useState<OptionsOrderBy>('');

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <SearchEngine search={search} setSearch={setSearch} />
        <div className={styles.menu__filter}>
          <OptionFilters filter={filter} setFilter={setFilter} />
          <Select orderBy={orderBy} setOrderBy={setOrderBy} />
        </div>
        <Items search={search} filter={filter} orderBy={orderBy} />
      </section>
    </main>
  );
}
