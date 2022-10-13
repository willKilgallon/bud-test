import React from 'react';

function FormattedCurrency(props) {
    const formattedValue = new Intl.NumberFormat(
        'en-GB',
        {
            style: 'currency',
            currency: props?.currency || 'GBP'
        }
    )
        .format(props?.value || 0);

    return (
        <span>{ formattedValue }</span>
    );
}

export default FormattedCurrency;