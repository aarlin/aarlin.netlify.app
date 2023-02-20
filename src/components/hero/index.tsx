import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Icon,
  Link,
} from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';

import {
  GITHUB_PROFILE,
  YOUTUBE_CHANNEL,
  TWITTER_PROFILE,
} from 'src/constants';
import { Link as LinkType } from '@/types/link';
import ExternalLink from '../external-link';
import HeroImage from '../hero-image';
type SocialLink = LinkType & { color?: string };

const socialLinks: SocialLink[] = [
  // {
  //   href: GITHUB_PROFILE,
  //   label: 'GitHub',
  // },
];

const Hero = () => {
  return (
    <Stack
      as='section'
      alignItems='center'
      direction={{ base: 'column-reverse', md: 'row' }}
      w='full'
      spacing={12}
    >
      <VStack alignItems='flex-start' w='full' spacing={3}>
        <Stack
          alignItems='center'
          justifyContent={{ base: 'center', md: 'flex-start' }}
          direction={{ base: 'column', md: 'row' }}
          w='full'
          spacing={3}
        >
          <Heading as='h1' size='lg'>
            Hi, I’m Aaron Lin
          </Heading>
        </Stack>
        <Text as='h2' lineHeight='175%'>
          I’m a software engineer at <ExternalLink href='https://liveperson.com'>LivePerson</ExternalLink>
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>
          {socialLinks.map(({ href, label, color }) => (
            <Button
              key={href}
              as={Link}
              justifyContent={{ base: 'flex-start', md: 'center' }}
              px={4}
              color={color}
              href={href}
              rightIcon={<Icon as={FiArrowUpRight} />}
              target='_blank'
              variant='ghost'
            >
              {label}
            </Button>
          ))}
        </Stack>
      </VStack>
      <HeroImage />
    </Stack>
  );
};

export default Hero;