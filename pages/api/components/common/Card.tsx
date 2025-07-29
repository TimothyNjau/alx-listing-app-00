import React, { ReactNode } from 'react';

type CardProps = {
    children: ReactNode;
    className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div
            className={`bg-white rounded-lg shadow-md p-6 ${className}`}
            style={{ maxWidth: 400, margin: '0 auto' }}
        >
            {children}
        </div>
    );
};

export default Card;