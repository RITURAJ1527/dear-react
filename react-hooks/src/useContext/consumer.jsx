import React from 'react'
import { UserContext, ChannelContext } from './provider'
export default function Consumer() {
  return (
    <div>
      hello
      <UserContext.Consumer>
        {
            (user)=>{
                return <ChannelContext.Consumer>
                    {
                        (channel)=>{
                            return (
                                <div>
                                    {user}
                                    {channel.channelName}
                                </div>
                            )
                        }
                    }
                </ChannelContext.Consumer>
            }
        }
      </UserContext.Consumer>
    </div>
  )
}
