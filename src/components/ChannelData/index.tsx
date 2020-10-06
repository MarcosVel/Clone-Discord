import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
   const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

   useEffect(() => {
      const div = messagesRef.current;

      if (div) {
         div.scrollTop = div.scrollHeight;
      }
   }, [messagesRef]);

   return (
      <Container>
         <Messages ref={messagesRef}>
            {Array.from(Array(15).keys()).map((n) => (
               <ChannelMessage
                  key={n}
                  author="Fulano"
                  date="29/09/2020"
                  content="Hoje é o meu aniversário!"
               />
            ))}

            <ChannelMessage
               author='Ciclano'
               date='29/09/2020'
               content={
                  <>
                     <Mention>@Fulano</Mention> Parabéns!! Tudo de bom sempre
                  </>
               }
               hasMention
               isBot
            />

            <ChannelMessage
               author='Marcos Veloso'
               date='05/10/2020'
               content='Estou fazendo um clone do front-end do Discord'
            />

            <ChannelMessage
               author='Lucas Fernandes'
               date='05/10/2020'
               content={
                  <>
                     <Mention>@Marcos Veloso</Mention>, sensacional! Tá dando muito trabalho?? hahah
                  </>
               }
               hasMention
               isBot
            />
         </Messages>

         <InputWrapper>
            <Input type='text' placeholder='Conversar em #chat-livre' />
            <InputIcon />
         </InputWrapper>
      </Container>
   );
}

export default ChannelData;