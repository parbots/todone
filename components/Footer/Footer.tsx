import styles from './Footer.module.css';
import React from 'react';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>© Parker Botsford</p>
        </footer>
    );
};

export default Footer;
