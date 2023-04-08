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



const IMAGE =
  'https://cdn.discordapp.com/attachments/1036228185756541008/1093337272339931278/pexels-los-muertos-crew-8064252-1080x1920-24fps.mp4'

  const IMAGE2 =
  'https://cdn.discordapp.com/attachments/1036228185756541008/1093340064513261568/pexels-ruslan-khmelevsky-4652161-1920x1080-24fps.mp4'
  const IMAGE3 =
  'https://cdn.discordapp.com/attachments/1036228185756541008/1093342481527087164/pexels-rodnae-productions-8624837-1920x1080-30fps.mp4'
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
      
<Box
id='ser'
shadow={'dark-lg'}
bg={'#ffe8c3'}
display={'flex'}
flexDirection={'column'}


>   



  <Heading color={'#718096'}  size={'3xl'} pr={'43%'} justifyItems={'center'} dir='rtl'>خدماتنا .. </Heading>
    
  <ScaleFade   
           initialScale={0.4}
          // dir='right'
           in={inViewport}
   
          //  whileHover={{ scale: 1.2 }}
           >
       
    <Box
    display={'flex '}
    justifyContent={'space-evenly'} 

    
    
    py={12}>


<Box 
ref={ref}

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
          backgroundColor:"#f2a900",
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
zIndex:-3, scale: 1.3}}
>
          <Box
          
            rounded={'lg'}
            as='video'
            autoPlay
            loop
            controls

            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE2}
          />
          </ScaleFade>
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'}>
            الخدمات
          </Text>
          <Heading color={'white'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
العناية بالخيل       </Heading>
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
          backgroundColor:"#f2a900",
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
          zIndex:-3, scale: 1.3}}
           >
          <Box
      
          
            rounded={'lg'}
            as='video'
            autoPlay
            loop
            controls

            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          />
          </ScaleFade>
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'}>
            الخدمات
          </Text>
          <Heading color={'white'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
ركوب الخيل            </Heading>
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
          backgroundColor:"#f2a900",
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
zIndex:-3, scale: 1.3}}
>
          <Box
          
            rounded={'lg'}
            as='video'
            autoPlay
            loop
controls
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE3}
          />
          </ScaleFade>
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'}>
            الخدمات
          </Text>
          <Heading color={'white'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
تدريب الخيول    </Heading>
          <Stack direction={'row'} align={'center'}>
        
          </Stack>
        </Stack>
      </Box>
    </Box>
    
    </ScaleFade>





<Link to={'/Cards'}>
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
اضغط للاطلاع على كافة الخدمات          </Button></Link>
    
    </Box>
    
    
  );
}