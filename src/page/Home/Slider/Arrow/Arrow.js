const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                position: 'absolute',
                left: '20px',
                zIndex: '10',
            }}
            onClick={onClick}
        />
    );
};
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                position: 'absolute',
                right: '20px',
                zIndex: '10',
            }}
            onClick={onClick}
        >
            next
        </div>
    );
};
export { PrevArrow, NextArrow };
