import {MongoClient} from 'mongodb';

export default async function Restaurant(req,res){

    if(req.method==='POST'){

        const myEmail = req.body.email;          

        const client  = await MongoClient.connect('mongodb+srv://tanvir:tanvir@cluster0.j34xwzp.mongodb.net/?retryWrites=true&w=majority');
        const db = client.db();
        const recEmail =await db.collection('list').insertOne({email:myEmail});
        client.close();

        res.status(200).json({message:'Email Submit Successfully',allEmail:recEmail})

    }

}