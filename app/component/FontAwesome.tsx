import React from 'react'
import { FontAwesomeIcon as FAIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; 

library.add(fas);

const FontAwesomeIcon = (props: React.JSX.IntrinsicAttributes & FontAwesomeIconProps) => <FAIcon {...props} />;
export default FontAwesomeIcon;
