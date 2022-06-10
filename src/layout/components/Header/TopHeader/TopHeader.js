import classNames from "classnames/bind";
import styles from "./TopHeader.module.scss";
 
const cx = classNames.bind(styles);

function TopHeader() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("logos")}>logo</div>
            <div className={cx("menu")}>menu</div>
        </div>
    );
}

export default TopHeader;
