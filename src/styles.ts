import { createGlobalStyle } from "styled-components";

import RobotoBold from "./assets/fonts/Roboto-Bold.woff";
import RobotoMedium from "./assets/fonts/Roboto-Medium.woff";
import RobotoRegular from "./assets/fonts/Roboto-Regular.woff";
import RobotoLight from "./assets/fonts/Roboto-Light.woff";

export const GlobalStyles = createGlobalStyle`

@font-face {
		font-family: 'Light';
		src: url(${RobotoLight}) format('woff');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'Regular';
		src: url(${RobotoRegular}) format('woff');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'Medium';
		src: url(${RobotoMedium}) format('woff');
		font-weight: 500;
		font-style: normal;
	}

	@font-face {
		font-family: 'Bold';
		src: url(${RobotoBold}) format('woff');
		font-weight: 700;
		font-style: normal;
	}

* {
	margin: 0;
	padding: 0;
	outline: 0;
	box-sizing: border-box;
	font-family: 'Regular';
}

body{
	margin: 32px;
}


`;
