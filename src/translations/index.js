import resources from './resources';

export const config = {
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'id',
  resources,
};

export { resources };