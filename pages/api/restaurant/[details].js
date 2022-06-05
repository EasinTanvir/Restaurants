import {MongoClient} from 'mongodb'
export default async function ResDetails(req,res){

    const connicting = `mongodb+srv://${process.env.username}:${process.env.password}@${process.env.cluster}.j34xwzp.mongodb.net/${process.env.database}?retryWrites=true&w=majority`

    const client  = await MongoClient.connect(connicting);

    if(req.method==='POST'){

        const {name,email,comment} = req.body;

        const RecData = {
            name,
            email,
            comment,
        }

       
        const db = client.db();
       const responses = await db.collection('resComment').insertOne(RecData)
  

        res.status(200).json({message:'Comment submit Successfully',comment:responses})

    }

    if(req.method==='GET'){
        
       
        const db = client.db();
       const response = await db.collection('resComment').find().sort({_id:-1}).toArray();

       res.status(200).json({message:'Get Comment SuccessFully',getcomment:response})
      


    }

    client.close()

}