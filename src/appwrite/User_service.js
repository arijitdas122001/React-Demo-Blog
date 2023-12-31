import { Client, Account, ID } from "appwrite";
import configs from "../config/configs";
class UserAuth{
    client=new Client();
    account;
    constructor(){
        this.account=new Account(this.client);
        this.client
        .setEndpoint(configs.appWriteUrl)
        .setProject(configs.appWriteProjectId)
    }
    async createAccount({usename,email,password}){
        try {
            const newAccount=await this.account.create(ID.unique(),email,password,usename);
            if(newAccount){
                // log in the user
                return this.UserLogIn({email,password});
            }else{
                return newAccount;
            }
        } catch (error) {
            console.log("Appwrite::Sign-in: ",error);
        }
    }
    async UserLogIn({email,password}){
        try {
           return await this.account.createEmailSession(email,password);
        } catch (error) {
            console.log("Appwrite::log-in: ",error);
        }
    }
    async GetCurrentUser(){
        try{
            return await this.account.get();
        }
        catch(error){
            console.log("Appwrite::getting-current-user: ",error);
        }
    }
    async UserLogOut(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite::log-out: ",error);
        }
    }
};
const UserAuthobj=new UserAuth();
export default UserAuthobj;