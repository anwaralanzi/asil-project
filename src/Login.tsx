import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Box,
  Image,
  color,
} from '@chakra-ui/react';
import React,{useState,useEffect, useRef} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import{Link as Link2} from 'react-router-dom'
export default function SplitScreen() {
 
  const ref = useRef<HTMLInputElement>(null);

    const [Email , setEmail] = useState('')
  const [Password, setPassword] = useState('')
   const [state, setstate] = useState([])
   useEffect(() => {

  axios.get("https://6362424766f75177ea2a992e.mockapi.io/todo").then((res) =>{
    console.log(res.data);
    setstate(res.data);
  })

},[])
const checkk =()=> state.filter(item=>{
  // eslint-disable-next-line eqeqeq
  {
    // navigate("/Home")
    // console.log("true");
    return true
  }


  // return (item.Email==Email&&item.Password==Password)

})
let f ;
  const navigate = useNavigate()
  const LogIn =()=>{
   f = checkk();
   console.log(f);
    if((Email.length<1 || Password.length<1)){
        alert("Email or Password is requird");
    }else if(f.length >0){
alert(`مرحبا${Email}`)
      navigate("/Cards")

  }else if (!f){
    alert ("worong")


  }
  }

  
  return (
    <Stack  bgImg={'https://cdn.discordapp.com/attachments/1036228185756541008/1092939730867462234/pexels-pixabay-210237_1.jpg'}  minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex shadow={'dark-lg'} p={0} flex={1} align={'center'} justify={'center'}>
        <Stack borderBottomColor={'ButtonShadow'} borderBlock={'WindowFrame'} spacing={20} w={'5xl'} maxW={'md'}>
          <Heading dir='rtl' ml={'30'}mt={'10'} color={'#f2a900'} fontSize={'2xl'}>سجل الدخول لحسابك</Heading>
          <FormControl id="email">
            <FormLabel dir='rtl' color={'#f2a900'}>ادخل الايميل</FormLabel>
            <Input onChange={e =>{setEmail(e.target.value)}} textColor={'#3f3f4e'} type="email" 
                              placeholder="example@example.com"
                              bg={'gray.300'}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel color={'#f2a900'} dir='rtl'>ادخل كلمة السر</FormLabel>
            <Input onChange={e =>{setPassword(e.target.value)}} type="password" 
              placeholder="example@example.com"
              bg={'gray.300'}
color={'#3f3f4e'}
            
            />
          </FormControl>
          <Stack  spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox borderRadius={'50%'}color={'#f2a900' }>تذكرني</Checkbox>
              <Link color={'#f2a900'}>نسيت كلمة السر؟</Link>

            </Stack>
            <Button onClick={()=>LogIn()} bg={'#f2a900'} variant={'solid'}>
تسجيل الدخول              </Button><Link2 to={'/'}>
<Button w={'100%'} bg={'#f2a900'} variant={'solid'}> العودة</Button></Link2>

          </Stack>
        </Stack>
      </Flex>
      {/* <Button  w={'50px'} border={50} bg={'#f2a900'}> العودة</Button> */}

      <Flex  flex={1}>
        <Box 
        
      as='video'
  autoPlay
 loop   
 controls   
  src='https://cdn.discordapp.com/attachments/1036228185756541008/1093015023925862503/WhatsApp_Video_2023-04-05_at_6.30.44_AM.mp4'
    
  >

  </Box>

  </Flex>

    </Stack>
  );
}
