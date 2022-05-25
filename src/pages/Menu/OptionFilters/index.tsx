import React from 'react';
import filtersArray from './filter.json';
import styles from './Filter.module.scss';
import classNames from 'classnames';

type OptionFilter = typeof filtersArray[0];

interface FilterProps {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export function OptionFilters({ filter, setFilter }: FilterProps) {
  function selectFilter(option: OptionFilter) {
    if (filter === option.id) return setFilter(null);
    return setFilter(option.id);
  }

  return (
    <div className={styles.filters}>
      {filtersArray.map((option) => (
        <button
          className={classNames({
            [styles.filters__filter]: true,
            [styles['filters__filter--active']]: filter === option.id,
          })}
          key={option.id}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
