import React, { useRef, useEffect } from "react";
import * as d3 from 'd3';

const D3V1 = () => {
  const svgRef = useRef();
 useEffect(() => {
        const svg = d3.select(svgRef.current);

       
    }, []);
  return (
    
      <svg ref={svgRef} viewBox="-300 -100 1200 1200">
        
      </svg>
    
  );
};

export default D3V1;