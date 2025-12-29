import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

export class Authservice{
    client=new Client();
    account;
    
    constructor(){
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteprojectid);

        this.account = new Account(this.client);
    }

    async createaccount({email,password,name}){
        try{
            const useraccount = await this.account.create({
                userId: ID.unique(), 
                email, 
                password,
                name
             });
             if (useraccount) {
                // return useraccount;
                return this.login({email,password});

             }
             else{
                return useraccount;
             }

        }
        catch(error){
            console.log("create account::error ",error);
            throw error;
            
        }
    }

//     async login({email,password}){
//         try {
//     return await this.account.createEmailPasswordSession({
//       email,
//       password
//     });

//   } catch (error) {
//     console.log("login::error", error);
//     throw error;
//   }
// }
async login({ email, password }) {
  try {
    // Check if user already has an active session
    const session = await this.account
      .getSession('current')
      .catch(() => null);

    if (session) {
      console.log("User already logged in");
      return session;   // don't create a new session
    }

    // Create new session only if none exists
    return await this.account.createEmailPasswordSession({
      email,
      password
    });

  } catch (error) {
    console.log("login::error", error);
    throw error;
  }
}



    async getCurrentUser(){
        try {
           return await this.account.get();
            // Logged in
        } catch (error) {
            console.log("get current user::error:",error);
            throw error;
        }
        return null;
    }
    
    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("logout::error ",error);
            throw error;
        }
        return null;
    }
}

const authservice= new Authservice();

export default authservice;