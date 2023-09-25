import React, { useState, useEffect } from 'react';
import './scoresdisplay.css';

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your backend API
    fetch('https://backend-422fb-default-rtdb.firebaseio.com/score/getscore.json')
      .then((response) => response.json())
      .then((data) => {
        let loadingData=[];
        for(const key in data){
            loadingData.push(
                {
                    email:data[key].maill,
                    scoree:data[key].scoree,
                }
            )

        }
        let mp= new Map();
        console.log(loadingData)
        loadingData.map((e)=>{
            // let {em,s} = e;
            // console.log(em,s)
            
            if(mp.has(e.email))
            {
                if(mp.get(e.email)<=e.scoree)
                mp.set(e.email,e.scoree)
            }
            else{
                mp.set(e.email,e.scoree);
            }
            
        })
        // loadingData = Array.from(mp.values());
        let getscores=[];
        mp.forEach((value, key)=>{
            getscores=[...getscores,{email:key,scoree:value}]
        })
        const finalScores=getscores.sort((e1,e2)=>{
            if (e1.scoree > e2.scoree) {
                return -1;  
              }
              return 0;
        })
        console.log(finalScores)
        setData(finalScores);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="table-container">
      <h1 className='heading'>SCORES TABLE</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Total Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.email}</td>
                <td>{item.scoree}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableComponent;
