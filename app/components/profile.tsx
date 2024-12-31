'use client'


import { useSession } from "next-auth/react"

export default function Profile(){
    const session = useSession()
    console.log(session)
    if (session.data?.user){
        return <div>From Client : User Is Signed In {JSON.stringify(session.data.user)}</div>
    }
  return <div>From Client : user is not Signed in</div>
}