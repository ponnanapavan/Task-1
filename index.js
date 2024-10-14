const axios = require('axios');
const dotenv=require('dotenv')


dotenv.config();

const API_KEY = process.env.API_KEY
const BASE_ID = process.env.BASE_ID
const TABLE_NAME =process.env.TABLE_NAME



async function getRecords() {
    
let data=[]
    try {
        const response = await axios.get(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        const records = response.data.records; 
         records.forEach((record)=>{
                data.push(record.fields)
         })

          

         if(data && data.length>0 ){
               data.forEach((record)=>{
                     if(record){
                          console.log('Details:' + record.FirstName + ' '+record.LastName+ ' '+ record.Status )
                     }
               })
         }
    } catch (error) {
        console.error('Error fetching records:', error.message);
    }
}

getRecords();
