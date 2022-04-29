import { cls } from 'utils/helpers';

const classes = {
    base: 'shadow appearance-none border-b-2 border-gray-500 focus:border-blue-600 rounded w-full py-2 px-3 bg-slate-800 text-gray-50 leading-tight focus:outline-none focus:shadow-outline',
    disabled: 'opacity-50 cursor-not-allowed',
};

const TextArea = ({ className, disabled, ...props }) => {
    return (
        <textarea
            className={cls(`${classes.base} ${className} ${disabled && classes.disabled}`)}
            type="text"
            disabled={disabled}
            {...props}
        />
    );
};

export default TextArea;
