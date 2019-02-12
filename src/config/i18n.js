import i18n from 'i18next';
import id from '../locale/id';
import en from '../locale/en';
i18n
.init({
resources: {
	id,
	en,
},
fallbackLng: 'id',
debug: true,
ns: ['translations'],
defaultNS: 'translations',
keySeparator: false,
interpolation: {
	escapeValue: false,
	formatSeparator: ',',
},
react: {
	wait: true,
},
});
export default i18n;