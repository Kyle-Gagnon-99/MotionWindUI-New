import React, { ButtonHTMLAttributes } from 'react';
import '@motionwindui/base/css/styles.css';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
	return <button className="bg-primary">{children}</button>;
}

export default Button;
