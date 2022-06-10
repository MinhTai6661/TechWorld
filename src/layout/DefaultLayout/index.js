import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import { Header, Footer } from '../components';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <>
            <header className={cx('header')}>
                <Header />
            </header>
            <div className={cx('container')}>{children}</div>
            <footer className={cx('footer')}>
                <Footer />
            </footer>
        </>
    );
}

export default DefaultLayout;
