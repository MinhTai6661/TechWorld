
import classNames from 'classnames/bind';
import styles from './Header.module.scss'

import TopHeader from './TopHeader/TopHeader'
import BottomHeader from './BottomHeader/BottomHeader'

const cx = classNames.bind(styles)

function Header() {
    return ( 
       <div className={cx('wrapper')}>
            <TopHeader/>
            <BottomHeader/>
       </div>
     );
}

export default Header;