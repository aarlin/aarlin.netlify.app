import NextImage, { ImageProps as NextImageProps } from "next/image";
import { chakra, ImageProps as ChakraImageProps } from "@chakra-ui/react";

type Props = NextImageProps & Omit<ChakraImageProps, "src">;

const MagicImage = chakra(NextImage, {
	shouldForwardProp: (prop) =>
		[
			"fill",
			"src",
			"alt",
			"placeholder",
			"width",
			"height",
			"priority",
			"borderradius",
		].includes(prop),
});

const Image = (props: Props) => <MagicImage {...props} />;

export default Image;
