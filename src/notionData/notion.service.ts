import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
const { Client } = require('@notionhq/client');


@Injectable()
export class NotionService {
  

    getAll() {
        return 'this is notion APi';
    }

    getToken(){
        
const options = {
    method: 'POST',
    url: 'https://api.notion.com/v1/oauth/token',
    headers: {accept: 'application/json', 'content-type': 'application/json'},
    data: {code: 'string', grant_type: '"authorization_code"', redirect_uri: 'string'}
  };
  
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data, "데이타");
    })
    .catch(function (error) {
      console.error(error, "에러");
    });
    }


   async getdata (){
        const notion = new Client({ auth: "secret_rf36ORAlaCXRX1ciDpVPPfomYtmVdoNNEBQm46exLTU" });
  const databaseId = '614feb6285264de6949e67742bbf2664';       
 
  const response = await notion.databases.retrieve({ database_id: databaseId });
  console.log(response,"getData response");
  console.log(response.properties,"properties");

return response.properties;

    }

}
