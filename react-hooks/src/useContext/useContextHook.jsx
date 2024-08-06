import React, { useContext } from 'react'

import { UserContext, ChannelContext } from './provider';

export default function UseContextHook() {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    
  return (
    <div>
      {user} - {channel.channelName}
    </div>
  )
}
