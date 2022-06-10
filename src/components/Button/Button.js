import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button(props) {
    const { children, primary, secondary, outline, disabled, to, href, className, ...rest } = props;
    const classNames = cx('wrapper', {
        primary,
        secondary,
        outline,
        disabled,
        [className]: !!className,
    });
    let Comp = 'button';
    const actions = {
        ...rest,
    };
    if (!!to) {
        Comp = Link;
        actions.to = to;
    } else if (!!href) {
        Comp = 'a';
        actions.href = href;
    }

    if (disabled) {
        Object.keys(actions).forEach((key) => {
            if (key.startsWith('on') && typeof actions[key] === 'function') {
                delete actions[key];
            }
        });
    }

    return (
        <Comp {...actions} className={cx(classNames)}>
            {children}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default Button;
