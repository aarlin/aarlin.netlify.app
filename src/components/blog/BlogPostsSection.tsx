import {
	Heading,
	HStack,
	Icon,
	List,
	ListItem,
	VStack,
} from "@chakra-ui/react";
import { CgArrowRight } from "react-icons/cg";

import { BlogPost } from "@/types/blog-post";
import BlogPostCard from "@/components/blog/BlogPostCard";
import ModifiedChakraLink from "@/components/ModifiedChakraLink";

type Props = {
	posts: BlogPost[];
};

const BlogPostsSection = ({ posts }: Props) => {
	return (
		<VStack as="section" alignItems="flex-start" w="full" spacing={4}>
			<HStack justifyContent="center" alignItems="center">
				<Heading size="lg">Latest Blog Posts</Heading>
				<HStack justifyContent="flex-end">
					<ModifiedChakraLink
						display="flex"
						alignItems="center"
						href="/blog"
						ml={{ base: 0, md: 4 }}
						role="group"
						colorScheme={"green"}
						aria-label="See all blog posts"
					>
						See all
						<Icon
							as={CgArrowRight}
							ml={1}
							color={"green.500"}
							_groupHover={{ ml: 3 }}
							transitionDuration="slow"
							transitionProperty="margin-left"
							transitionTimingFunction="ease-out"
						/>
					</ModifiedChakraLink>
				</HStack>
			</HStack>
			<List w="full" spacing={{ base: 8, md: 2 }}>
				{posts.map((post) => (
					<ListItem key={post.slug}>
						<BlogPostCard {...post} />
					</ListItem>
				))}
			</List>
		</VStack>
	);
};

export default BlogPostsSection;
