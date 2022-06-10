import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import TopHeader from './TopHeader/TopHeader';
import BottomHeader from './BottomHeader/BottomHeader';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <TopHeader />
            <BottomHeader />
        </header>
    );
}

export default Header;
