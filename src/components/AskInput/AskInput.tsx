import { ChangeEvent, FC, useState } from 'react';

import styles from './AskInput.module.scss';

interface IProps {
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export const AskInput: FC<IProps> = ({ onChange, onSubmit }) => {
  const [query, setQuery] = useState<string>('');
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onChange(e.target.value);
  };

  const [placeholder, setPlaceholder] = useState<string>('🪄 Ask IMS');
  const handleOnFocus = () => setPlaceholder('');

  return (
    <>
      <input
        className={styles.dialogBoxInput}
        placeholder={placeholder}
        onFocus={handleOnFocus}
        value={query}
        onChange={handleOnChange}
      />

      <button className={styles.dialogBoxButton} onClick={onSubmit}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M7.49997 18L6.59397 9.84449C6.33447 7.51049 8.73747 5.79599 10.86 6.80249L28.776 15.2895C31.0635 16.3725 31.0635 19.6275 28.776 20.7105L10.86 29.1975C8.73747 30.2025 6.33447 28.4895 6.59397 26.1555L7.49997 18ZM7.49997 18H18"
            stroke="#5896C0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </>
  );
};
