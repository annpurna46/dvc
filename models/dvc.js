import mongoose, { Schema, model, models } from "mongoose";

const dvcSchema = new Schema({
    name: {
        type: String,
        required:false
      },
      themeCategory: {
        type: String,
        required:false
      },
      theme: {
        type: String,
        required:false

      },
      companyName:{
        type:String,
        required:false
      },
      companyEmail:{
        type:String,
        required:false
      },
      company_logo:{
        type:String,
        required:false
      },
      contactQRCode:{
        type:String,
        required:false
      },
      brochure:{
        type:String,
        required:false
      },
      domainName:{
        type:String,
        required:false
      },
      googleDirectionLink:{
        type:String,
        required:false

      },
      designation:{
        type:String,
        required:false

      },
      phone_no:{
        type:String,
        required:false

      },
      alternate_no:{
        type:String,
        required:false

      },
      whatsapp_no:{
        type:String,
        required:false

      },
      companyAddress:{
        type:String,
        required:false

      },
      businessLocation:{
        type:String,
        required:false

      },
      establishmentDate:{
        type:String,
        required:false

      },
      note:{
        type:String,
        required:false

      },
      paid:{
        type:String,
        required:false

      },
      paid_date:{
        type:String,
        required:false

      },
      paytmNumber:{
        type:String,
        required:false

      },
      googlePayNumber:{
        type:String,
        required:false

      },
      phonePeNumber:{
        type:String,
        required:false

      },
      count:{
        type:String,
        required:false

      },
      fb_url:{
        type:String,
        required:false

      },
      yt_url:{
        type:String,
        required:false

      },    
      linkedin_url:{
        type:String,
        required:false

      },
      insta_url:{
        type:String,
        required:false

      }, 
      tweet_url:{
        type:String,
        required:false

      },
      url:{
        type:String,
        required:false

      },
      status:{
        type:String,
        required:false

      },
      valid_till:{
        type:String,
        required:false

      },
      accountType:{
        type:String,
        required:false

      },
      bankName:{
        type:String,
        required:false

      },
      ifscCode:{
        type:String,
        required:false

      },
      accountNo:{
        type:String,
        required:false

      },
      accountHolderName:{
        type:String,
        required:false

      },
      payment_qr:{
        type:String,
        required:false

      },
      payment_link:{
        type:String,
        required:false

      },
      userId:{
        type:String,
        required:false

      },
}, { timestamps: true });
const dvcs = mongoose.models.dvcs || mongoose.model("dvcs", dvcSchema);
export default dvcs;