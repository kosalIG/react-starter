import { useTranslation } from 'react-i18next';

const useTrans = () => {
  const { t, i18n } = useTranslation();

  return { t, i18n };
};

export default useTrans;
