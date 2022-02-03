import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Store } from '../../types/store';
import { requestBackend } from '../../utils/request';
import './styles.css';

export type StoreData = {
  store: Store;
};

type Props = {
  onSubmitFilter: (data: StoreData) => void;
};

function Filter({ onSubmitFilter }: Props) {
  const [selectStores, setSelectStores] = useState<Store[]>([]);

  const { setValue, getValues, control } = useForm<StoreData>();

  const handleChangeStore = (value: Store) => {
    setValue('store', value);
    const obj: StoreData = {
      store: getValues('store')
    };
    onSubmitFilter(obj);
  };

  useEffect(() => {
    requestBackend({ url: '/stores' })
      .then((response) => {
        setSelectStores(response.data);
      })
      .catch(() => {
        console.error('Erro to fetch stores');
      });
  }, []);

  return (
    <div className="filter-container base-card">
      <form>
        <Controller
          name="store"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={selectStores}
              isClearable
              classNamePrefix="filter-select"
              placeholder="Lojas"
              onChange={(value) => handleChangeStore(value as Store)}
              getOptionLabel={(store: Store) => store.name}
              getOptionValue={(store: Store) => String(store.id)}
            />
          )}
        />
      </form>
    </div>
  );
}

export default Filter;
