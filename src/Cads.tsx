import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  chakra,
  VStack,
  Button,
  ScaleFade,
  Slide,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { Link } from 'react-router-dom';
import Footer from './Footer'
import Nav from './Nav';


  export default function ProductSimple() {
      const ref =useRef(null);
      const {inViewport}=useInViewport(
        ref,
        {rootMargin:"-120px "},
        {disconnectOnLeave:false},
        {}
        );
        console.log(inViewport);
  return (
      
    <><Nav></Nav> <Box
    pt={'50'}
    pb={'50'}
      shadow={'dark-lg'}
      bg={'#ffe8c3'}
      display={'flex'}
      flexDirection={'column'}


    >



      <Heading pb={'50'} color={'#718096'} size={'3xl'} pr={'43%'} justifyItems={'center'} dir='rtl'>خدماتنا .. </Heading>

      <ScaleFade
        initialScale={0.4}
        // dir='right'
        in={inViewport}

      >

        <Box
          display={'flex '}
          px={'15'}
          mx={'14'}
          justifyContent={'space-around'}
          height={'1400px'}
          alignContent={'space-between'}


          flexWrap={'wrap'}


          //   paddingY={'100'}
          ref={ref}



          py={12}
        >


          <Box


            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('#3f3f4e', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                //   backgroundImage: `url(${IMAGE})`,
                backgroundColor: "#f2a900",
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <ScaleFade

                initialScale={1}
                in={inViewport}

                whileHover={{
                  zIndex: -3, scale: 1.3
                }}
              >
                <Image

                  rounded={'lg'}

                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800'} />
              </ScaleFade>
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'}>
                الخدمات
              </Text>
              <Heading color={'white'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                علوم الخيل      </Heading>
                <Link to={'/Thanks'}>
                <Button  color={'white'} fontSize={'lg'} px={'90px'} w={'100%'} bg={'#f2a900'}>اختيار</Button></Link>

              <Stack direction={'row'} align={'center'}>

              </Stack>
            </Stack>
          </Box>

          <Box


            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('#3f3f4e', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                //   backgroundImage: `url(${IMAGE})`,
                backgroundColor: "#f2a900",
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <ScaleFade

                initialScale={1}
                in={inViewport}

                whileHover={{
                  zIndex: -3, scale: 1.3
                }}
              >
                <Image

                  rounded={'lg'}

                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://cdn.discordapp.com/attachments/1036228185756541008/1092883180396220436/pexels-elina-sazonova-1838569.jpg'} />
              </ScaleFade>
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'}>
                الخدمات
              </Text>
              <Heading color={'white'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                التزاوج     </Heading>
                <Link to={'/Thanks'}>
                <Button  color={'white'} fontSize={'lg'} px={'90px'} w={'100%'} bg={'#f2a900'}>اختيار</Button></Link>

              <Stack direction={'row'} align={'center'}>

              </Stack>
            </Stack>
          </Box>

          <Box


            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('#3f3f4e', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                //   backgroundImage: `url(${IMAGE})`,
                backgroundColor: "#f2a900",
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <ScaleFade

                initialScale={1}
                in={inViewport}

                whileHover={{
                  zIndex: -3, scale: 1.3
                }}
              >
                <Image

                  rounded={'lg'}


                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://cdn.discordapp.com/attachments/1036228185756541008/1092883181092470895/pexels-sergey-makashin-5368712.jpg'} />
              </ScaleFade>
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'}>
                الخدمات
              </Text>
              <Heading color={'white'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                تدريب الخيال      </Heading>
                <Link to={'/Thanks'}>
                <Button  color={'white'} fontSize={'lg'} px={'90px'} w={'100%'} bg={'#f2a900'}>اختيار</Button></Link>

              <Stack direction={'row'} align={'center'}>

              </Stack>
            </Stack>
          </Box>
          <Box


            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('#3f3f4e', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                //   backgroundImage: `url(${IMAGE})`,
                backgroundColor: "#f2a900",
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <ScaleFade

                initialScale={1}
                in={inViewport}

                whileHover={{
                  zIndex: -3, scale: 1.3
                }}
              >
                <Image

                  rounded={'lg'}

                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://images.pexels.com/photos/12954607/pexels-photo-12954607.jpeg?auto=compress&cs=tinysrgb&w=800'} />
              </ScaleFade>
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'}>
                الخدمات
              </Text>
              <Heading color={'white'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                طعام الخيل   </Heading>
                <Link to={'/Thanks'}>
                <Button  color={'white'} fontSize={'lg'} px={'90px'} w={'100%'} bg={'#f2a900'}>اختيار</Button></Link>

              <Stack direction={'row'} align={'center'}>

              </Stack>
            </Stack>
          </Box><Box


            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('#3f3f4e', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                //   backgroundImage: `url(${IMAGE})`,
                backgroundColor: "#f2a900",
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <ScaleFade

                initialScale={1}
                in={inViewport}

                whileHover={{
                  zIndex: -3, scale: 1.3
                }}
              >
                <Image

                  rounded={'lg'}

                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://images.pexels.com/photos/1524620/pexels-photo-1524620.jpeg?auto=compress&cs=tinysrgb&w=800'} />
              </ScaleFade>
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'}>
                الخدمات
              </Text>
              <Heading color={'white'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                السباقات    </Heading>
                <Link to={'/Thanks'}>
                <Button  color={'white'} fontSize={'lg'} px={'90px'} w={'100%'} bg={'#f2a900'}>اختيار</Button></Link>

              <Stack direction={'row'} align={'center'}>

              </Stack>
            </Stack>
          </Box><Box


            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('#3f3f4e', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                //   backgroundImage: `url(${IMAGE})`,
                backgroundColor: "#f2a900",
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <ScaleFade

                initialScale={1}
                in={inViewport}

                whileHover={{
                  zIndex: -3, scale: 1.3
                }}
              >
                <Image

                  rounded={'lg'}

                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://cdn.discordapp.com/attachments/1036228185756541008/1092883182313017414/istockphoto-460899921-1024x1024.jpg'} />
              </ScaleFade>
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'}>
                الخدمات
              </Text>
              <Heading color={'white'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                مستلزمات الخيول     </Heading>
                <Link to={'/Thanks'}>
                <Button  color={'white'} fontSize={'lg'} px={'90px'} w={'100%'} bg={'#f2a900'}>اختيار</Button></Link>

              <Stack direction={'row'} align={'center'}>

              </Stack>
            </Stack>
          </Box><Box


            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('#3f3f4e', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                //   backgroundImage: `url(${IMAGE})`,
                backgroundColor: "#f2a900",
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <ScaleFade

                initialScale={1}
                in={inViewport}

                whileHover={{
                  zIndex: -3, scale: 1.3
                }}
              >
                <Image

                  rounded={'lg'}


                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://images.pexels.com/photos/5087988/pexels-photo-5087988.jpeg?auto=compress&cs=tinysrgb&w=800'} />
              </ScaleFade>
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'}>
                الخدمات
              </Text>
              <Heading color={'white'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                العناية بالخيل       </Heading>
                <Link to={'/Thanks'}>
                <Button  color={'white'} fontSize={'lg'} px={'90px'} w={'100%'} bg={'#f2a900'}>اختيار</Button></Link>

              <Stack direction={'row'} align={'center'}>

              </Stack>
            </Stack>
          </Box>





          <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('#3f3f4e', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                //   backgroundImage: `url(${IMAGE})`,
                backgroundColor: "#f2a900",
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <ScaleFade

                initialScale={1}
                in={inViewport}

                whileHover={{
                  zIndex: -3, scale: 1.3
                }}
              >
                <Image

                  rounded={'lg'}

                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://cdn.discordapp.com/attachments/1036228185756541008/1094098277881880636/pexels-markus-spiske-93489.jpg'} />
              </ScaleFade>
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'}>
                الخدمات
              </Text>
              <Heading color={'white'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                ركوب الخيل            </Heading>
                <Link to={'/Thanks'}>
                <Button  color={'white'} fontSize={'lg'} px={'90px'} w={'100%'} bg={'#f2a900'}>اختيار</Button></Link>

              <Stack direction={'row'} align={'center'}>
              </Stack>
            </Stack>
          </Box>
          <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('#3f3f4e', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                //   backgroundImage: `url(${IMAGE})`,
                backgroundColor: "#f2a900",
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <ScaleFade

                initialScale={1}
                in={inViewport}

                whileHover={{
                  zIndex: -3, scale: 1.3
                }}
              >
                <Image

                  rounded={'lg'}

                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={'https://images.pexels.com/photos/8624614/pexels-photo-8624614.jpeg?auto=compress&cs=tinysrgb&w=800'} />
              </ScaleFade>
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'}>
                الخدمات
              </Text>
              <Heading color={'white'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                تدريب الخيول    </Heading>
                <Link to={'/Thanks'}>
                <Button  color={'white'} fontSize={'lg'} px={'90px'} w={'100%'} bg={'#f2a900'}>اختيار</Button></Link>

              <Stack direction={'row'} align={'center'}>

              </Stack>
            </Stack>
          </Box>
        </Box>

      </ScaleFade>





      <Link to={'/'}>
        <Button
          ml={'60%'}
          w={'30%'}
          rounded={'full'}
          size={'lg'}
          fontWeight={'normal'}
          px={6}
          colorScheme={'orange'}
          bg={'#F2A900'}
          _hover={{ bg: '#3F3F4E' }}
          boxShadow={"dark-lg"}
          mb={"3%"}
        >
          العودة للخلف         </Button></Link>

    </Box><Footer></Footer></>
    
  );
}