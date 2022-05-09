// declare module "react-native-restart";

// declare module "react-native-video-controls";

// declare module "react-native-svg-icon";

// declare module '*.png';

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}
