import { setItem, getItem, clear } from './LocalStore';
import { Car, Settings, DataStore } from '../model';

const DataStoreKey = 'grip-data-store';

export const loadData = (): DataStore => {
  try {
    const json = JSON.parse(getItem(DataStoreKey) || '{}');

    return new DataStore({
      selectedCar: json.selectedCar ? new Car(json.selectedCar) : null,
      cars: (json.car || []).map(c => new Car(c)),
      settings: new Settings(json.settings)
    });
  } catch (e) {
    throw new Error('Failed to load data: ' + e);
  }
};

export const saveData = (data: DataStore) => {
  return setItem(DataStoreKey, JSON.stringify(data.toJSON()));
};

export const clearData = () => {
  clear();
};
