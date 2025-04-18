import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';
const FacebookMsg = () => {
  return (
    <FacebookProvider appId="1864536924307049" chatSupport>
    <CustomChat pageId="403040979562420" minimized={true}/>
  </FacebookProvider>   
  )
}

export default FacebookMsg