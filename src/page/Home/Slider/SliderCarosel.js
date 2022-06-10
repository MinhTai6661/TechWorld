import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PrevArrow, NextArrow } from './Arrow/Arrow';
import images from '~/assets/images';
import styles from './Slider.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function SliderCarosel() {
    console.log(typeof images.banner);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        speed: 1500,
        pauseOnHover: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className={cx('wrapper')}>
            <Slider {...settings}>
                <div className={cx('slider-item')}>
                    <div className={cx('item-backgroud')}>
                        <img className={cx('item-backgroud-img')} src={images.banner} />
                    </div>
                    <div className={cx('introduce')}>
                        <span className={cx('label')}>Giới thiệu</span>
                        <h2 className={cx('title')}>Laptop</h2>
                        <span className={cx('desc')}>Có 2 dòng laptop cơ bản</span>
                        <div className={cx('btn-group')}>
                            <Button className={cx('btn')} secondary>
                                Laptop WokStation
                            </Button>
                            <Button className={cx('btn')} secondary outline>
                                Laptop Gaming
                            </Button>
                        </div>
                    </div>
                </div>

                <div className={cx('slider-item')}>
                    <div className={cx('item-backgroud')}>
                        <img className={cx('item-backgroud-img')} src={images.banner} />
                    </div>
                    <div className={cx('introduce')}>
                        <span className={cx('label')}>Giới thiệu</span>
                        <h2 className={cx('title')}>Laptop</h2>
                        <span className={cx('desc')}>Có 2 dòng laptop cơ bản</span>
                        <div className={cx('btn-group')}>
                            <Button className={cx('btn')} secondary>
                                Laptop WokStation
                            </Button>
                            <Button className={cx('btn')} secondary outline>
                                Laptop Gaming
                            </Button>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default SliderCarosel;
