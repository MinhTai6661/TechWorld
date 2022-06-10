import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './BottomHeader.module.scss';

import images from '~/assets/images';
const cx = classNames.bind(styles);

function BottomHeader() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        {' '}
                        <img className={cx('logo-img')} src={images.logo} />
                    </Link>
                </div>
                <ul className={cx('category')}>
                    <li>
                        <Link className={cx('category-item')} to="/">
                            Laptop
                        </Link>
                    </li>
                    <li>
                        <Link className={cx('category-item')} to="/">
                            Gear
                        </Link>
                    </li>
                    <li>
                        <Link className={cx('category-item')} to="/">
                            Phone
                        </Link>
                    </li>
                    <li>
                        <Link className={cx('category-item')} to="/">
                            Tablet
                        </Link>
                    </li>
                    <li>
                        <Link className={cx('category-item')} to="/">
                            other
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BottomHeader;
