import styles from './Select.module.scss';
import options from './options.json';
import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { OptionsOrderBy } from '..';

interface SelectProps {
  orderBy: string;
  setOrderBy: React.Dispatch<React.SetStateAction<OptionsOrderBy>>;
}

export function Select({ orderBy, setOrderBy }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const orderByName = orderBy && options.find((option) => option.value === orderBy)?.name;

  return (
    <button
      className={classNames({
        [styles.select]: true,
        [styles['select--active']]: orderBy !== '',
      })}
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
    >
      <span>{orderByName || 'Ordenar por:'}</span>
      {isOpen ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      <div
        className={classNames([
          {
            [styles.select__options]: true,
            [styles['select__options--active']]: isOpen,
          },
        ])}
      >
        {options.map((option) => (
          <div
            className={styles.select__option}
            key={option.value}
            onClick={() => setOrderBy(option.value as OptionsOrderBy)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}
