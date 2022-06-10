import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Home.module.scss';
import SliderCarosel from './Slider';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container')}>
            <div className={cx('slider')}>
                <SliderCarosel />
            </div>
        </div>
    );
}

export default Home;
