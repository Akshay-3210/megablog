import conf from '../conf/conf'
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteprojectid);
        this.databases= new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    async createPost({title,slug,content,featuredimage,status,userid}){
        try {
            return await this.databases.createDocument({
                databaseId:conf.appwritedatabaseid,
                collectionId:conf.appwritecollectionid,
                documentId:slug,
                data:{
                    title,
                    content,
                    featuredimage,
                    status,
                    userid
                }
            })

        } catch (error) {
            console.log("createpost::error ",error);
            throw error;
        }
    }

    async updatePost(slug,{title,content,featuredimage,status}){
        try {
            return await this.databases.updateDocument({
                databaseId:conf.appwritedatabaseid,
                collectionId:conf.appwritecollectionid,
                documentId:slug,
                data:{
                    title,
                    content,
                    featuredimage,
                    status
                }
            })

        } catch (error) {
            console.log("updatepost::error ",error);
        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument({
                databaseId:conf.appwritedatabaseid,
                collectionId:conf.appwritecollectionid,
                documentId:slug
            })
            return true;
            
        } catch (error) {
            console.log("deletepost::error ",error);
            return false;
        }
    }

    async getPost(slug){
        try {
           return await this.databases.getDocument({
                databaseId:conf.appwritedatabaseid,
                collectionId:conf.appwritecollectionid,
                documentId:slug
           })
            
        } catch (error) {
            console.log("getpost::error ",error);
            return false;
        }
    }

    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments({
                databaseId:conf.appwritedatabaseid,
                collectionId:conf.appwritecollectionid,
                queries:queries
            })
            
        } catch (error) {
            console.log("getposts::error ",error);
            return false;
        }
    }

    //file upload
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwritebucketid,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("uploadfile::error ",error);
            return false;
        }
    }

    async deleteFile(fileid){
        try {
            await this.bucket.deleteFile(
                conf.appwritebucketid,
                fileid
            )
            return true;
        } catch (error) {
            console.log("deletefile::error ",error);
            return false;
        }
    }

    getFilePreview(fileId) {
  return this.bucket.getFileView(
    conf.appwritebucketid,
    fileId
  );
}


}

const service=new Service();
export default service;