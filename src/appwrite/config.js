import { Client, Databases , Account } from "appwrite";

const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("66af935100269dc6cd39");



const account = new Account(client);   
const databases = new Databases(client,"66af940b0004d2597f20");


export { client, databases  , account };