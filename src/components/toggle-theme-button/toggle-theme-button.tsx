import * as React from "react";
import { Box, useColorMode } from "@chakra-ui/react";

import { MoonFillIcon } from "./components/moon-fill-icon";
import { SunFillIcon } from "./components/sun-fill-icon";

export function ToggleThemeButton() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box
			role="button"
			as="button"
			p="0"
			_dark={{
				color: "secondary.400",
			}}
			_hover={{
				bg: "transparent",
				color: "green.500",
			}}
			onClick={() => toggleColorMode()}
			aria-label={colorMode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
		>
			{colorMode === "dark" ? <SunFillIcon /> : <MoonFillIcon />}
		</Box>
	);
}
