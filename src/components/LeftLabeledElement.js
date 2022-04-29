import PropTypes from 'prop-types';
import { cls } from 'utils/helpers';

function LeftLabeledElement({ label, children, className, ...props }) {
    return (
        <div className={cls(`flex items-center ${className}`)}>
            <p className="flex-none pr-4">{label}: </p>
            {children}
        </div>
    );
}

LeftLabeledElement.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default LeftLabeledElement;
