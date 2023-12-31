import { Client, Databases } from "appwrite";
import configs from "../config/configs";

class DataBase_operations{
    client=new Client();
    databseses;
    constructor(){
        this.client
            .setEndpoint(configs.appWriteUrl)
            .setProject(configs.appWriteProjectId);
        this.databseses=new Databases(this.client);
    }
    async CreateDocument({title,content,img,userName,id}){
        try {
            return await this.databseses.createDocument(configs.appWriteDatabaseId,configs.appWriteCollectionId,id,{
                title,
                content,
                img,
                userName,
            })
        } catch (error) {
            console.log("Appwrite::Document-creation: ",error)
        }
    }
    async UpdateDocument({title,content,img,userName,id}){
        try {
            return await this.databseses.updateDocument(configs.appWriteDatabaseId,configs.appWriteCollectionId,id,{
                title,
                content,
                img,
                userName,
            })
        } catch (error) {
            console.log("Appwrite::Document-Updation: ",error)
        }
    }
    async DeleteDocument(id){
        try {
            await this.databseses.deleteDocument(configs.appWriteDatabaseId,configs.appWriteCollectionId,id)
            return true;
        } catch (error) {
            return false;
        }
    }
    async GetDocument({id}){
        try {
            return await this.databseses.getDocument(configs.appWriteDatabaseId,configs.appWriteCollectionId,id);
        } catch (error) {
            console.log("Appwrite::Documnet-receiving: ",error);
            return false;
        }
    }
    async GetAllDocuments(){
        try {
            return await this.databseses.listDocuments(configs.appWriteDatabaseId,configs.appWriteCollectionId);
        } catch (error) {
            console.log("Appwrite::All-Document-receiving: ",error);
            return false;
        }
    }
};
const Db_op=new DataBase_operations();
export default Db_op;