import React, { ButtonHTMLAttributes } from 'react';
import '@motionwindui/base/css/styles.css';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/* Any React children */
	children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
	return <button className="btn--test">{children}</button>;
}

export default Button;
