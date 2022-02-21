import styles from 'styles/HomePage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';

import Header from 'components/Header';
import App from 'components/App';
import Footer from 'components/Footer';

const ToDone: NextPage = () => {
    return (
        <div className={styles.page}>
            <Head>
                <title>ToDone</title>
                <meta name='description' content='Go from do to done.' />
            </Head>

            <Header />
            <main className={styles.main}>
                <App />
            </main>
            <Footer />
        </div>
    );
};

export default ToDone;
