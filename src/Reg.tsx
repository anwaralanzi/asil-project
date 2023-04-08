import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
    ScaleFade,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
  
  const avatars = [
    {
      name: 'Ryan Florence',
      url: 'https://bit.ly/ryan-florence',
    },
    {
      name: 'Segun Adebayo',
      url: 'https://bit.ly/sage-adebayo',
    },
    {
      name: 'Kent Dodds',
      url: 'https://bit.ly/kent-c-dodds',
    },
    {
      name: 'Prosper Otemuyiwa',
      url: 'https://bit.ly/prosper-baba',
    },
    {
      name: 'Christian Nwamba',
      url: 'https://bit.ly/code-beast',
    },
  ];
  
  export default function JoinOurTeam() {
    const ref =useRef(null);
    const {inViewport}=useInViewport(
      ref,
      {rootMargin:"-120px "},
      {disconnectOnLeave:false},
      {}
      );
      console.log(inViewport);
    const [username, setusername] = useState('')
    const [emile, setemile] = useState('')
    const [password, setpassword] = useState('')

    function Reg() {
      if (username === "") return alert("Please Enter username");
      axios
        .post(
          "https://6362424766f75177ea2a992e.mockapi.io/todo",
  
          { username: username, emile: emile, password: password }
        )
        alert("Success");
    }
    return (
      <Box  bg={'#ffe8c3'} position={'relative'}>
        <ScaleFade   
          initialScale={0.4}
         // dir='right'
          in={inViewport}
  
         //  whileHover={{ scale: 1.2 }}
          >
        <Container
        id='regg'
        
        shadow={'dark-lg'}
        bg={'#ffe8c3'}
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}>
          <Stack spacing={{ base: 10, md: 20 }}ref={ref} > 
            <Heading ml={'20%'}
            color={'#718096'}
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
              ! ..بادر بالتسجيل في موقعنا {' '}
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
              </Text>{' '}
            </Heading>
            <Stack direction={'row'} spacing={4} align={'center'}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                  ml={'0%'}
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    // size={useBreakpointValue({ base: 'md', md: 'lg' })}
                    position={'relative'}
                    zIndex={2}
                    _before={{
                      content: '""',
                      width: 'full',
                      height: 'full',
                      rounded: 'full',
                      transform: 'scale(1.125)',
                      bgGradient: 'linear(to-bl, orange,gray.400)',
                      position: 'absolute',
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text color={'gray.500'} fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                +
              </Text>
              <Flex
pl={'0'}   
ml={'30%'}             align={'center'}
                justify={'center'}
                fontFamily={'heading'}
                fontSize={{ base: 'sm', md: 'lg' }}
                bg={'gray.800'}
                color={'orange'}
                rounded={'full'}
                minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
                minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
                position={'relative'}
                _before={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  bgGradient: 'linear(to-bl, orange.400,gray.400)',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}>
                YOU
              </Flex>
            </Stack>
          </Stack>
          <Stack
            bg={'#3f3f4e'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>
            <Stack spacing={4}>
              <Heading
                color={'white'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
التسجيل والانضمام                <Text
                  as={'span'}
                  bgGradient="linear(to-r, #f2a900,orange)"
                  bgClip="text">
..                </Text>
              </Heading>
              <Text color={'gray.100'} fontSize={{ base: 'sm', sm: 'md' }}>
             .. سجل الان في موقع أصيل للحجز والحصول على كافة الخدمات
              </Text>
            </Stack>
            <Box as={'form'} mt={10}>
              <Stack spacing={4}>
                <Input type='name'
                onChange={(e)=>setusername(e.target.value)}
                  placeholder="الاسم "
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input type='email' 
                                onChange={(e)=>setemile(e.target.value)}

                  placeholder="aaa..@..com"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input type='password'
                                onChange={(e)=>setpassword(e.target.value)}

                  placeholder="كلمة السر "
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
              </Stack>
              <Button 

              onClick={Reg}
                fontFamily={'heading'}
                mt={8}
                w={'full'}
bg={'#f2a900'}                color={'black'}
                _hover={{
                 bgColor:'gray.100',
                  boxShadow: 'xl',
                }}>
                تسجيل
              </Button>
              
            </Box>
            <Link to={'/login'}>
                <Button w={'100%'} fontFamily={'heading'} 
                
          bg={'gray.300'} color={'black'}
          _hover={{
          bg:'#f2a900',}}>
تسجيل الدخول                </Button></Link>
          </Stack>
        </Container>
        </ScaleFade>

        <Blur
          position={'absolute'}
          top={-10}
          left={-10}
          style={{ filter: 'blur(70px)' }}
        />
      </Box>
        )}
  
  export const Blur = (props: IconProps) => {
    return (
      <Icon
      mt={'20%'}
      ml={'10%'}
        width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
        zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
        height="560px"
        viewBox="0 0 528 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <circle cx="71" cy="90" r="111" fill="#F56565" />
        <circle cx="244" cy="106" r="139" fill="#" />
        <circle cy="291" r="139" fill="#" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#" />
      </Icon>
    );
  };