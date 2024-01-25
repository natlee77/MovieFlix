import {settings} from '../utilities/config.js'

export default class HttpClient  {    
    //https://api.themoviedb.org/3/movie/popular?api_key=e37e2f3f58bd0980eac83099577532c2&language=ru-RU
    async get(resourse) {
       
        const baseUrl=`${settings.BASE_URL}/${resourse}`;
        const url=`${baseUrl}?api_key=${settings.API_KEY}`;//&language=se-SE
        const response = await fetch(url);   
        
         
    try{
        if (response.ok) {
            // Läser in datat  ifrån response{o}- async             
             const data = await response.json();
             return data;        
              
          } else {
            //if bad request 400-fysisk
            throw new Error(`problem to get data ${response.status} ${response.statusText}`);
          }
    } catch (error) {     
        throw new Error(`Error in  get(): ${error.message}`);
      }
    }
}