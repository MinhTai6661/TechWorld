
import classNames from 'classnames/bind';
import styles from './BottomHeader.module.scss'
const cx = classNames.bind(styles)


function BottomHeader() {
    return (
        <div className={cx('wrapper')} >
            bottom header
        </div>
      );
}

export default BottomHeader;