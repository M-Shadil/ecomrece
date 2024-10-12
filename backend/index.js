const port = 4000;
import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
const app = express();
import jwt from 'jsonwebtoken';
import path from 'path';
import cors from 'cors';

app.use(express.json());
app.use(cors());

//connect db with mongodb
mongoose.connect("mongodb+srv://shadil:23khJ8QS7NOnO316@cluster0.tu1fo.mongodb.net/ecommerce");

//api creation

app.get('/',(req,res)=>{
    res.send("hello shadil")
})

// image storage engine

const storage = multer.diskStorage({
  destination:'./upload/images',
  filename:(req,file,cb)=>{
      return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({storage:storage})

//creating upload endpoint for images

app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
  res.json({
    success:1,
    image_url:`http://localhost:${port}/images/${req.file.filename}`
  })
})

// Schema for creating products

const Product = mongoose.model("Product",{
  id:{
    type: Number,
    required: true,
  },
  name:{
    type: String,
    required: true,
  },
  image:{
    type: String,
    required: true,
  },
  category:{
    type: String,
    required:true,
  },
  new_price:{
    type:Number,
    requried:true,
  },
  old_price:{
    type: Number,
    required:true,
  },
  date:{
    type: Date,
    default:Date.now,
  },
  avilable:{
    type:Boolean,
    default:true,
  },
})

app.post('/addproduct',async(req,res)=>{
  let products= await Product.find({});
  let id;
  if(products.length>0){
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id+1;
  }
  else{
    id=1;
  }
  const product = new Product({
    id:id,
    name:req.body.name,
    image:req.body.image,
    category:req.body.category,
    new_price:req.body.new_price,
    old_price:req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
    success:true,
    name:req.body.name,
  })
})


// creating api for deleting products

app.post("/removeproduct",async(req,res)=>{
  await Product.findOneAndDelete({id:req.body.id});
  console.log(req.body.name+' has been removed');
  res.json({
    success:true,
    name:req.body.name
  })
})

//creating api for getting all products

app.get('/allproducts',async(req,res)=>{
  let products= await Product.find({});
  console.log("all products fecth");
  res.send(products);  
})


app.listen(port,(error)=>{
    if (!error) {
        console.log('server up on :'+port);
    }
    else{
        console.log("Error: "+error);
    }
});
