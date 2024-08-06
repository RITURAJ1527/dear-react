import React from 'react'
import Consumer from './consumer';
import UseContextHook from './useContextHook';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export default function Provider() {
  return (
    <div>
      hfgjfjfgj
      <UserContext.Provider value={"Raj"}>
        <ChannelContext.Provider value={{channelName: "Dear Diary"}}>
            <Consumer></Consumer>
            <UseContextHook></UseContextHook>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}
