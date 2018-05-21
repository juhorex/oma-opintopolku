import React from 'react';
import { I18n } from 'react-i18next';
import { getUser } from 'Src/utils.js'
import styles from '../Greeting.css';

const GuestGreeting = () => (
  <I18n ns="home">
    {t => (
      <div className={styles['greeting-container']}>
        <h1>{t('login.info')}</h1>
        <button className={styles['login-button']} onClick={ getUser }>{t('common:login')}</button>
      </div>
    )}
  </I18n>
);

export default GuestGreeting;
