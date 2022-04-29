import { cls } from 'utils/helpers';

const classes = {
    // base: 'shadow appearance-none border-b-2 border-gray-300 focus:border-blue-600 rounded w-full py-2 px-3 bg-slate-800 text-gray-50 leading-tight focus:outline-none focus:shadow-outline',
    base: 'appearance-none w-full h-5 p-0 bg-slate-600 active:bg-blue-800 transition ease-in-out duration-300 rounded-full focus:outline-none focus:ring-0 focus:shadow-none',
    disabled: 'opacity-50 cursor-not-allowed',
};

const Range = ({ className, disabled, min = 0, max = 100, step = 1, ...props }) => {
    return (
        <input
            className={cls(`${classes.base} ${className} ${disabled && classes.disabled}`)}
            type="range"
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            {...props}
        />
    );
};

export default Range;
