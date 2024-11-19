// import * as ENV from '@env';


export const getData = async(collectionName: string, payload: any) => {
   
    try {
      console.log("process.env", process.env);
      console.log("process.env.MONGODB_USERNAME", process.env.MONGODB_USERNAME);
        await connectMongoDb();

        const response = await fetch(`${process.env.URL_MONGODB_SERVICE}/find/${collectionName}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload) // Convert the data to JSON
        });
    
        if (!response.ok) {
          throw new Error('Failed to save data');
        }
    
        const result = await response.json();
        return result;
      } catch (error: any) {
        return { status: "error", message: error.message };
      }
}

const connectMongoDb = async() => {
    const payload = {
        "username": process.env.MONGODB_USERNAME,
        "password": process.env.MONGODB_PASSWORD,
        "dbName": process.env.MONGODB_DBNAME,
        "host": process.env.MONGODB_HOST,
        "appName": process.env.MONGODB_APPNAME
      }

    try {
        const response = await fetch(`${process.env.URL_MONGODB_SERVICE}/connect`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload) // Convert the data to JSON
        });
    
        if (!response.ok) {
          throw new Error('Failed to save data');
        }
    
        const data = await response.json();
        console.log('Mongodb is connected:', data);
      } catch (error) {
        console.error('Error:', error);
      }
}
