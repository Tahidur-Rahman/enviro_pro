import React, { useRef, useEffect } from "react";
import * as d3 from 'd3';

const green1 = "#75A874"
const green2 = "#5AA25A"
const green3 = "#79C17A"
const green4 = "#67B765"
const Leaf = () => {
  const svgRef = useRef();
 useEffect(() => {
        const svg = d3.select(svgRef.current);

        const leafPath1 = `M461.044,46.548C331.271-11.868,184.378,3.571,89.951,98.005
        C-0.94,188.893-18.62,328.363,32.254,454.389c-8.792,8.638-16.89,16.648-23.973,23.734c-5.857,5.857,0,0,0,0l21.188,21.188
        c1.946-1.945,0,0,0,0c7.083-7.087,15.092-15.181,23.731-23.977c126.023,50.878,265.493,33.194,356.38-57.693
        C504.014,323.207,519.46,176.315,461.044,46.548z`;
        const leafPath2 = `M17.463,511.318C16.697,512.083,16.415,512.361,17.463,511.318L17.463,511.318z`;
        const leafPath3 = `M21.188,507.592c-0.808,0.808-1.441,1.437-2.003,2.002
			C20.219,508.565,21.188,507.592,21.188,507.592z`;
		const leafPath4 = `M18.568,510.209c-0.393,0.393-0.765,0.765-1.069,1.073
			C17.763,511.017,18.135,510.646,18.568,510.209z`;
	
			const leafPath5 = `M89.951,85.799C-4.491,180.233-19.93,327.126,38.493,456.892l422.55-422.55
				C331.271-24.074,184.378-8.635,89.951,85.799z`;
			const leafPath6 = `M409.579,405.435c-94.434,94.434-241.327,109.88-371.086,51.457l422.55-422.55
				C519.46,164.108,504.014,311.001,409.579,405.435z`;
		
		const leafPath7 = `M21.188,495.386c3.168-1.988,3.168-1.988,8.28-8.281
			C131.175,385.391,408.442,91.169,417.631,77.754C404.209,86.936,109.987,364.21,8.281,465.917C2.424,471.773,0,474.19,0,474.19
			L21.188,495.386z`;
		const leafPath8 = `M267.027,236.353c0,0,0,0,0-9.311c0-41.882-8.031-159.557-10.025-164.205
			c-2.009,4.648-10.033,122.323-10.033,164.205c-0.007,9.311-0.007,9.311-0.007,9.311H267.027z`;
		const leafPath9 = `M160.479,342.901c0,0,0,0,0-9.31c0-41.883-8.03-159.557-10.033-164.205
			c-2.009,4.647-10.033,122.329-10.033,164.205c0,9.31,0,9.31,0,9.31H160.479z`;
		const leafPath10 = `M260.813,230.139c0,0,0,0,9.31,0c41.882,0,159.557,8.023,164.205,10.033
			c-4.648,2.009-122.323,10.033-164.205,10.033c-9.31,0-9.31,0-9.31,0V230.139z`;
		const leafPath11 = `M154.265,336.686c0,0,0,0,9.311,0c41.875,0,159.557,8.031,164.205,10.033
			c-4.648,2.01-122.33,10.033-164.205,10.033c-9.311,0.007-9.311,0.007-9.311,0.007V336.686z`;


        svg.append("path")
           .attr("d", leafPath1)
           .attr('fill',green1);
           svg.append("path")
           .attr("d", leafPath2)
           .attr('fill',green2);
           svg.append("path")
           .attr("d", leafPath3)
           .attr('fill',green2);
           svg.append("path")
           .attr("d", leafPath4)
           .attr('fill',green2);
           svg.append("path")
           .attr("d", leafPath5)
           .attr('fill',green3);
           svg.append("path")
           .attr("d", leafPath6)
           .attr('fill',green4);
           svg.append("path")
           .attr("d", leafPath7)
           .attr('fill',green2);
           svg.append("path")
           .attr("d", leafPath8)
           .attr('fill',green2);
           svg.append("path")
           .attr("d", leafPath9)
           .attr('fill',green2);
           svg.append("path")
           .attr("d", leafPath10)
           .attr('fill',green2);
           svg.append("path")
           .attr("d", leafPath11)
           .attr('fill',green2);
    }, []);
  return (
    
      <svg ref={svgRef} viewBox="-300 -100 1200 1200">
        
      </svg>
    
  );
};

export default Leaf;