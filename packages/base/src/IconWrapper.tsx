import React, { ReactElement } from 'react';
import {
	IconOutline,
	IconSolid,
	IconSpinners,
	outlineIconMap,
	solidIconMap,
	spinnerIconMap,
} from './icons';

export interface IconWrapperProps {
	icon: keyof IconOutline | IconSolid | IconSpinners | ReactElement;
	[key: string]: any;
}

function IconWrapper({ icon, ...props }: IconWrapperProps) {
	if (typeof icon === 'string' || typeof icon === 'number') {
		const IconComponent =
			outlineIconMap[icon] || solidIconMap[icon] || spinnerIconMap[icon];
		if (!IconComponent) {
			console.error(`HeroIcon/Spinner not found: ${icon}`);
			return null;
		}

		return <IconComponent.component {...props} />;
	}

	return React.cloneElement(icon, props);
}

export default IconWrapper;
