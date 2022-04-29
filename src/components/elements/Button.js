import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cls } from 'utils/helpers';

const classes = {
    base: 'focus:outline-none transition ease-in-out duration-300',
    disabled: 'opacity-50 cursor-not-allowed',
    pill: 'rounded-full',
    size: {
        small: 'px-2 py-1 text-sm',
        normal: 'px-4 py-2',
        large: 'px-8 py-3 text-lg',
    },
    variant: {
        primary: 'bg-blue-500 hover:bg-blue-800 active:bg-blue-900 active:transition-none text-white',
        secondary:
            'bg-gray-200 hover:bg-gray-800 active:bg-gray-900 active:transition-none text-gray-900 hover:text-white',
        danger: 'bg-red-500 hover:bg-red-800 active:bg-red-900 active:transition-none text-white',
    },
};

const Button = forwardRef(
    (
        {
            children,
            type = 'button',
            className,
            variant = 'primary',
            size = 'normal',
            pill,
            disabled = false,
            ...props
        },
        ref
    ) => (
        <button
            ref={ref}
            disabled={disabled}
            type={type}
            className={cls(`
                ${classes.base}
                ${classes.size[size]}
                ${classes.variant[variant]}
                ${pill && classes.pill}
                ${disabled && classes.disabled}
                ${className}
            `)}
            {...props}
        >
            {children}
        </button>
    )
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    submit: PropTypes.oneOf(['submit', 'button']),
    className: PropTypes.string,
    pill: PropTypes.bool,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    size: PropTypes.oneOf(['small', 'normal', 'large']),
};

export default Button;
