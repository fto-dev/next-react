import { useEffect, useState } from "react";

export const StringMerge = (a, b) => {
  const [dan, setDan] = useState("variable 0");
  //console.log(`initial ${dan}`);

  useEffect(() => {
    setTimeout(() => {
        setDan("variable 1");
        //console.log(`updated ${dan}`);    
    }, 1200);
  }, []); 

  return dan;
};
