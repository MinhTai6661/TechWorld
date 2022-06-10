import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './TopHeader.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function TopHeader() {
    console.log(images);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo-list')}>
                    <span className={cx('logo-item')}>
                        <img className={cx('logo-img')} src={images.brand.asus} />
                    </span>
                    <span className={cx('logo-item')}>
                        <img className={cx('logo-img')} src={images.brand.corsair} />
                    </span>
                    <span className={cx('logo-item')}>
                        <img className={cx('logo-img', 'fix-img')} src={images.brand.dell} />
                    </span>
                    <span className={cx('logo-item')}>
                        <img className={cx('logo-img')} src={images.brand.kingston} />
                    </span>
                </div>
                <div className={cx('menu')}>
                    <ul className={cx('menu-list')}>
                        <li className={cx('menu-item')}>
                            <Link className={cx('item-link')} to="/">
                                Home
                            </Link>
                        </li>
                        <li className={cx('menu-item')}>
                            <Link className={cx('item-link')} to="/">
                                Blog
                            </Link>
                        </li>
                        <li className={cx('menu-item')}>
                            <Link className={cx('item-link')} to="/">
                                FAQ
                            </Link>
                        </li>
                        <li className={cx('menu-item')}>
                            <Link className={cx('item-link')} to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;
