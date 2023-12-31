import { Client, Storage,ID } from "appwrite";
import configs from "../config/configs";
class File_operations{
    client=new Client();
    storage;
    constructor(){
        this.client
            .setEndpoint(configs.appWriteUrl)
            .setProject(configs.appWriteProjectId);
        
        this.storage=new Storage(this.client);
    }
    async CreateFile(file){
        try {
            return this.storage.createFile(configs.appWriteBucketId,ID.unique(),file);
        } catch (error) {
            console.log("AppWrite::File-creating: ",error);
            return false;
        }
    }
    async DeleteFile({id}){
        try {
          return this.storage.deleteFile(configs.appWriteBucketId,id);
        } catch (error) {
            console.log("Appwrite:File-Deleting: ",error);
            return false;
        }
    }
     getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}
const file_op=new File_operations();
export default file_op;