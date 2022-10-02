import React from 'react';

const Content = (props) => {
   const {titleContent,nameContent,contentDescription,setName,setVContent} = props;
 return (<>
 <h1>{titleContent}</h1>
 <h2>{nameContent}</h2>
 <h3>{contentDescription}</h3>
 <h4>{setVContent}</h4>
 <button onClick={()=>setName(setVContent)}>Click to change</button>
 <hr style={{color:'red', width: '100px'}}/>
 </>)

}

export default Content;