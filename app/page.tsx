import { Button } from "@nextui-org/react";
import * as actions from '@/app/actions'
import {auth} from '@/app/auth'
import Profile from "./components/profile";

export default async function Home() {
   
   const session = await auth()


  console.log(session)
  return (
       <div>
        <form action={actions.signIn}>
        <Button type="submit">Click Me</Button>
        </form>
        <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
        </form>
        {
          session?.user ? <div>{JSON.stringify(session?.user)}</div> : <div>Sign Out </div>
        }

        <Profile />
       </div>
  );
}
