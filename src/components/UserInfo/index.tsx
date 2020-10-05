import React from 'react';

import { 
   Container, 
   Profile, 
   Avatar, 
   UserData, 
   Icons,
   MicIcon,
   HeadphoneIcon, 
   SettingsIcon 
} from './styles';

const UserInfo: React.FC = () => {
   return (
      <Container>
         <Profile>
            <Avatar />
            <UserData>
               <strong title='Marcos Roberto Veloso'>Marcos Roberto Veloso</strong>
               <span>#3238</span>
            </UserData>
         </Profile>

         <Icons>
            <MicIcon />
            <HeadphoneIcon />
            <SettingsIcon />
         </Icons>
      </Container>
   );
}

export default UserInfo;