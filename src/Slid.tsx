import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';


// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 3500,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'أصيل',
      text:
        "لكل ما يهم الخيل والخيال..",
      image:
        'https://cdn.discordapp.com/attachments/1036228185756541008/1093022592551628880/pexels-helena-lopes-1996332.jpg',
    },
    {
      title: 'ركوب الخيل',
      text:
        "مارس هوايتك بركوب الخيل والسباقات",
      image:
        'https://images.pexels.com/photos/11289051/pexels-photo-11289051.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'رعاية الخيل',
      text:
        "نوفر في موقعنا كل مايحتاجه الخيل من رعاية يومية تحت اشراف خبراء مختصين ..",
      image:
        'https://cdn.discordapp.com/attachments/1036228185756541008/1092939690291757137/pexels-edward-eyer-677830.jpg',
    },
  ];

  return (
    <Box bg={ '#ffe8c3'} >
    <Box
 filter='auto' brightness='60%'

borderTopRightRadius={324}
borderBottomLeftRadius={326}
      position={'relative'}
      objectFit={"contain"}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
       
         
      
            key={index}
            // height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize='100% 100%'
            backgroundImage={`url(${card.image})`}
            background-size={' 100% 100%'}

            // backgroundSize="contain"
            >
            {/* This is the block you need to change, to customize the caption */}
            <Container   size="container.lg" height="600px" position="relative">
              <Stack
              mt={'30%'}
              ml={'40%'}
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading backdropFilter='auto' backdropBlur='8px' dir='rtl' ml={'60%'} color={'antiquewhite'} fontSize={'5xl'}>
                  {card.title}
                </Heading>
                <Text  backdropFilter='auto' backdropBlur='8px' dir='rtl' fontSize={'2xl'} color={'white'}>
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
    </Box>
  );
}