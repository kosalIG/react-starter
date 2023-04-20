import Trans from 'i18n/Trans';
import useTrans from 'i18n/useTrans';
import React from 'react';

const Dashboard: React.FC = () => {
  const { t, i18n } = useTrans();
  return (
    <div>
      <div>{t('learn')}</div>
      <div>
        <Trans key="learn">Learn i18next</Trans>
      </div>
      <button onClick={() => i18n.changeLanguage('kh')} type="button">
        Change
      </button>
    </div>
  );
};

export default Dashboard;
