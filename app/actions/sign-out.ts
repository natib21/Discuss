'use server'
import * as auth from '@/app/auth'; 

export async function signOut() {
    // Ensure that signOut is an async operation
    return  auth.signOut();
}