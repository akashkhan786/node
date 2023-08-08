const dbconnection=require('./mongodb');

const update=async ()=>{
let db=await dbconnection();
 let result =await db.updateMany(
    {name:"syed"},{
        $set:{name:"Akash"}
    }
 )
 console.warn(result);
}
update();