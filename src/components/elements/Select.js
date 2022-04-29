import { cls } from 'utils/helpers';
import PropTypes from 'prop-types';

const classes = {
    base: 'block appearance-none border-b-2 border-gray-500 focus:border-blue-600 rounded w-full py-2 px-3 bg-slate-800 text-gray-50 leading-tight focus:outline-none focus:shadow-outline',
    disabled: 'opacity-50 cursor-not-allowed',
};

function Select({ className, disabled = false, options = [], value, ...props }) {
    return (
        <div className={cls(`relative w-full ${className}`)}>
            <select
                className={cls(`${classes.base} ${disabled && classes.disabled}`)}
                value={value}
                disabled={disabled}
                {...props}
            >
                {options.map((o, i) => (
                    <option key={i} value={o.value}>
                        {o.text ?? o.value}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                    className={cls(`${disabled && classes.disabled} text-gray-50 fill-current h-4 w-4 opacity-50`)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>
    );
}

Select.prototype = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string,
        })
    ),
};

export default Select;
