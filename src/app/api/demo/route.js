 import { NextResponse } from "next/server";
 import  { PrismaClient } from '@prisma/client';



 
//.................aggregation...................

 export async function POST(req,res){
    try{
        let prisma = new PrismaClient({log:["error","info","query","warn"]})
        let result = await prisma.order.aggregate({
            _count:{id:true},
            _avg:{grandTotal:true},
            _max:{grandTotal:true},
            _min:{grandTotal:true},
            _sum:{grandTotal:true}
        })

        

        return NextResponse.json({status:"success",res:result})

    }
    catch(e){
        return NextResponse.json({status:"fail",msg:e})
    }
 }
//................. group by.....................

export async function PATCH(req,res){
    try{
        let prisma = new PrismaClient({log:["error","info","query","warn"]})
        let result = await prisma.order.groupBy({
            by:["lastName"],
            _count:{id:true},
            _avg:{grandTotal:true},
            _max:{grandTotal:true},
            _min:{grandTotal:true},
            _sum:{grandTotal:true}
        })

        

        return NextResponse.json({status:"success",res:result})

    }
    catch(e){
        return NextResponse.json({status:"fail",msg:e})
    }
 }


//...............transaction rollback............


 export async function PUT(req,res){
    try{
        let prisma = new PrismaClient()
       let createUser = prisma.user.create({
        data:{
                 firstName:"abir",
                 middleName:"khan",
                 lastName:"md",
                 mobile:"0134233231",
                 email:"abiardf@gmail.com",
                 admin:"admin"
                            
                        }
       })

       let deleteOrder= prisma.order.delete({
        where:{
            id:23
        }
       })

       let result = await prisma.$transaction([createUser,deleteOrder])

        

        return NextResponse.json({status:"success",res:result})

    }
    catch(e){
        return NextResponse.json({status:"fail",msg:e})
    }
 }














// --------------------User----------------


             //  create user

//  export async function POST(req,res){

//     BigInt.prototype.toJSON=function(){
//         return this.toString()
//     }
//     try{
//         let prisma = new PrismaClient()
//         let result=await prisma.user.create({
//             data:{
//                  firstName:"abir",
//                  middleName:"khan",
//                  lastName:"md",
//                  mobile:"0134233231",
//                  email:"abiardf@gmail.com",
//                  admin:"admin"
                
//             }
//         })
//         return NextResponse.json({status:"success" ,msg:result})

//     }
//     catch(e){
//         return NextResponse.json({status:"fail",msg:e.toString()})
//     }
//  }



                    //read

// export async function GET(req,res){
//     try{
//         let prisma = new PrismaClient()
//         let result = await prisma.user.findMany({
//             where:{
//                 id:1
//             },
//             select:{
//                 id:true,
//                 middleName:true,
//                 lastName:true
//             }
//         })
        
//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail",msg:"something went wrong"})
//     }
// }

                  //update data 



// export async function PUT(req,res){
//     try{
//         let prisma = new PrismaClient()
//         let result =await prisma.user.update({
//             where: {id: 1},
//             data: {middleName:"shafin",lastName:"Eqram"}
//           })
        
//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail",msg:"something went wrong"})
//     }
// }


                //update data 



// export async function PATCH(req,res){
//     BigInt.prototype.toJSON=function(){
//         return this.toString()
//     }
//     try{
//         let prisma = new PrismaClient()
//         let result =await prisma.user.delete({
//             where: {id:24},
             
//           })
        
//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail",msg:"something went wrong"})
//     }
// }







 


// ---------------product--------------- 



                   //create

//  export async function POST(req,res){

     
//     try{
//         let prisma = new PrismaClient()
//         let result=await prisma.product.create({
//             data:{
//                  firstName:'md' ,
//                  metaTitle:"metaData",
//                  slug:"slug",
//                  summary:"this is the summary",
//                  piece:1233,
//                  discount:70,
//                  user: {
//                     connect: { id: 21 }, 
//                   }
                
                
//             }
//         })
//         return NextResponse.json({status:"success" ,msg:result})

//     }
//     catch(e){
//         return NextResponse.json({status:"fail",msg:e.toString()})
//     }
//  }



                 //read data




// export async function GET(req,res){
//     try{
//         let prisma = new PrismaClient()
//         let result = await prisma.product.findMany({
//             where:{
//                 id:1
//             },
//             select:{
//                 id:true,
//                 piece:true,
//                 discount:true
//             }
//         })
        
//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail",msg:"something went wrong"})
//     }
// }




 
              //update data 



// export async function PUT(req,res){
//     try{
//         let prisma = new PrismaClient()
//         let result =await prisma.product.update({
//             where: {id: 1},
//             data: {piece:1222, discount:123}
//           })
        
//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail",msg:"something went wrong"})
//     }
// }



 
             //delete data 



 
// export async function PATCH(req,res){
//     try{
//         let prisma = new PrismaClient()
//         let result = await prisma.product.delete({
//             where:{
//                 id:3
//             }
//         })

//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail", msg:e.toString()})
//     }
// }







//------------------order -----------------


 


                 //create

 
//  export async function POST(req, res) {
//     BigInt.prototype.toJSON=function(){
//         return this.toString()
//     }
//     try {
//       let prisma = new PrismaClient();
//       let result = await prisma.order.create({
//         data: {
//           title: "title",
//           token: "token", 
//           subTotal:123,
//           tax: 12,        
//           total: 1203,      
//           discount: 23,   
//           grandTotal: 1000,  
//           firstName: "md",
//           middleName: "babul",
//           lastName: "hossain",
//           mobile: "0156734",  
//           email: "sada@gmail.com",
//           city: "dhaka",
//           country: "bangladesh",
//           user: {
//             connect: { id: 23 },
//           },
//         },
//       });
//       return NextResponse.json({ status: "success", msg: result });
//     } catch (e) {
//       return NextResponse.json({ status: "fail", msg: e.toString() });
//     }
//   }
  



               //read data



 
// export async function GET(req,res){
//     try{
//         let prisma = new PrismaClient()
//         let result = await prisma.order.findMany({
//             where:{
//                 id:1
//             } 
//         })
        
//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail",msg:"something went wrong"})
//     }
// }




 
               //update data 



// export async function PUT(req,res){
//     try{
//         let prisma = new PrismaClient()
//         let result =await prisma.order.update({
//             where: {id: 1},
//             data: {token:"updateToken", discount:23}
//           })
        
//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail",msg:"something went wrong"})
//     }
// }



 
                //delete data 



 
// export async function PATCH(req,res){
     
//     try{
//         let prisma = new PrismaClient()
//         let result = await prisma.order.delete({
//             where:{
//                 id:3
//             }
//         })

//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail", msg:e.toString()})
//     }
// }










// .............cart................



//create

 
//  export async function POST(req, res) {
//     BigInt.prototype.toJSON=function(){
//         return this.toString()
//     }
//     try {
//       let prisma = new PrismaClient();
//       let result = await prisma.cart.create({
//         data: {
//           title: "title",
//           sessonId:"sessonId",
//           token: "token",
//           status:"active",
//           firstName: "md",
//           middleName: "babul",
//           lastName: "hossain",
//           mobile: "0156734",  
//           email: "sada@gmail.com",
//           city: "dhaka",
//           country: "bangladesh",
//           user: {
//             connect: { id: 23 },
//           },
//         },
//       });
//       return NextResponse.json({ status: "success", msg: result });
//     } catch (e) {
//       return NextResponse.json({ status: "fail", msg: e.toString() });
//     }
//   }
  




//read data



 
// export async function GET(req,res){
//     try{
//         let prisma = new PrismaClient()
//         let result = await prisma.cart.findMany()
        
//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail",msg:"something went wrong"})
//     }
// }




 
//update data 



// export async function PUT(req,res){
//     try{
//         let prisma = new PrismaClient()
//         let result =await prisma.cart.update({
//             where: {id: 1},
//             data: {token:"updateToken",lastName:"haider"}
//           })
        
//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail",msg:"something went wrong"})
//     }
// }



 
//delete data 



 
// export async function PATCH(req,res){
     
//     try{
//         let prisma = new PrismaClient()
//         let result = await prisma.cart.delete({
//             where:{
//                 id:3
//             }
//         })

//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail", msg:e.toString()})
//     }
// }



//............category................






//create

 
//  export async function POST(req, res) {
//     BigInt.prototype.toJSON=function(){
//         return this.toString()
//     }
//     try {
//       let prisma = new PrismaClient();
//       let result = await prisma.category.create({
//         data: {
//           title: "title", 
//           metaTitle:"metaTitle ",
//           slug:"1",
//           content:"this is the content"
          
//         },
//       });
//       return NextResponse.json({ status: "success", msg: result });
//     } catch (e) {
//       return NextResponse.json({ status: "fail", msg: e.toString() });
//     }
//   }
  




//read data



 
// export async function GET(req,res){
//     try{
//         let prisma = new PrismaClient()
//         let result = await prisma.category.findMany()
        
//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail",msg:"something went wrong"})
//     }
// }




 
//update data 



// export async function PUT(req,res){
//     try{
//         let prisma = new PrismaClient()
//         let result =await prisma.category.update({
//             where: {id: 1},
//             data: {content:"update content",slug:"2"}
//           })
        
//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail",msg:"something went wrong"})
//     }
// }



 
//delete data 



 
// export async function PATCH(req,res){
     
//     try{
//         let prisma = new PrismaClient()
//         let result = await prisma.category.delete({
//             where:{
//                 id:3
//             }
//         })

//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail", msg:e.toString()})
//     }
// }







// .............product_meta................



//create

 
//  export async function POST(req, res) {

//     BigInt.prototype.toJSON=function(){
//         return this.toString()
//     }

//     try {
//       let prisma = new PrismaClient();
//       let result = await prisma.product_meta.create({
//         data: { 
//             key:"1",
//             content:"this is the content",
//             product: {
//                   connect: { id: 13 },
//                   }

//         },
//       });
//       return NextResponse.json({ status: "success", msg: result });
//     } catch (e) {
//       return NextResponse.json({ status: "fail", msg: e.toString() });
//     }
//   }
  




//read data



 
// export async function GET(req,res){
//     try{
//         let prisma = new PrismaClient()
//         let result = await prisma.product_meta.findMany()
        
//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail",msg:"something went wrong"})
//     }
// }




 
//update data 



// export async function PUT(req,res){
//     try{
//         let prisma = new PrismaClient()
//         let result =await prisma.product_meta.update({
//             where: {id: 1},
//             data: {key:"updated key",content:"haider"}
//           })
        
//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail",msg:"something went wrong"})
//     }
// }



 
//delete data 



 
// export async function PATCH(req,res){
     
//     try{
//         let prisma = new PrismaClient()
//         let result = await prisma.product_meta.delete({
//             where:{
//                 id:12
//             }
//         })

//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail", msg:e.toString()})
//     }
// }



// .............product_review................



//create

 
//  export async function POST(req, res) {

//     BigInt.prototype.toJSON=function(){
//         return this.toString()
//     }

//     try {
//       let prisma = new PrismaClient();
//       let result = await prisma.product_review.create({
//         data: { 
//             title:"this title",
//             rating:"3",
//             content:"this is the content",
//             product: {
//                   connect: { id: 13 },
//                   }

//         },
//       });
//       return NextResponse.json({ status: "success", msg: result });
//     } catch (e) {
//       return NextResponse.json({ status: "fail", msg: e.toString() });
//     }
//   }
  




//read data



 
// export async function GET(req,res){
//     try{
//         let prisma = new PrismaClient()
//         let result = await prisma.product_review.findMany()
        
//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail",msg:"something went wrong"})
//     }
// }




 
//update data 



// export async function PUT(req,res){
//     try{
//         let prisma = new PrismaClient()
//         let result =await prisma.product_review.update({
//             where: {id: 1},
//             data: {title:"updated key", rating:"haider"}
//           })
        
//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail",msg:"something went wrong"})
//     }
// }



 
//delete data 



 
// export async function PATCH(req,res){
     
//     try{
//         let prisma = new PrismaClient()
//         let result = await prisma.product_review.delete({
//             where:{
//                 id:12
//             }
//         })

//         return NextResponse.json({status:"success",msg:result})
//     }
//     catch(e){
//         return NextResponse.json({status:"fail", msg:e.toString()})
//     }
// }










 