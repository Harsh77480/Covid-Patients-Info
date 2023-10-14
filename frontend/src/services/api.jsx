
async function fetchUsers(query1,query2,query3) {
  try{
    const queryParams = new URLSearchParams(); //adding queries in parameter 

    (query1)?query1.forEach((e)=>{
      queryParams.append('BMI', e);
    }):null;

    (query2)?queryParams.append('gender', query2):null;
    (query3)?queryParams.append('sort', query3):null;

    console.log(queryParams.toString());

    const response = await fetch('http://localhost:3000/?' + queryParams.toString() );
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  }
  catch{
    throw new Error('Internal server error');
  }



  }

  export default fetchUsers;
