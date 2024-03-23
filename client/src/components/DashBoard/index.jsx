import { PieChart } from "@mui/x-charts/PieChart";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// <<<<<<< main
export default function DashBoard({stats}) {
// =======
// export default function DashBoard() {
// >>>>>>> main
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const data = [
    {
      data: [
// <<<<<<< main
        { value: (stats.leetcode/stats.total)*100, label: 'Leetcode' ,color:'red'},
        { value: (stats.codechef/stats.total)*100, label: 'Codechef' ,color:'yellow'},
        { value: (stats.spoj/stats.total)*100, label: 'Spoj' ,color:'blue'},
        { value: (stats.codeforces/stats.total)*100, label: 'Codeforces' ,color:'green'},
        { value: (stats.hackerrank/stats.total)*100, label: 'Hackerrank' ,color:'orange'}
// =======
//         { value: 100, label: "Leetcode", color: "red" },
//         { value: 100, label: "Codechef", color: "yellow" },
//         { value: 100, label: "Spoj", color: "blue" },
//         { value: 100, label: "Codeforces", color: "green" },
//         { value: 100, label: "Hackerrank", color: "orange" },
// >>>>>>> main
      ],
      innerRadius: 50,
      outerRadius: 100,
      paddingAngle: 1,
      cornerRadius: 5,
      startAngle: 1,
      endAngle: 360,
      cx: 150,
      cy: 150,
    },
// <<<<<<< main
    
//   ]
// =======
  ];
// >>>>>>> main

  return (
    <div
      style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
    >
      {isMobile && (
        <>
          <PieChart
            colors={["red", "yellow", "blue", "green", "orange"]}
            series={data}
            width={300}
            height={300}
            slotProps={{ legend: { hidden: true } }}
          />
          <div>
            <legend>
              <ul>
                {data[0].data.map((item, index) => (
                  <li key={index} style={{ color: item.color }}>
                    {item.label}
                  </li>
                ))}
              </ul>
            </legend>
          </div>
        </>
      )}
      {!isMobile && (
        <PieChart
          colors={["red", "yellow", "blue", "green", "orange"]}
          series={data}
          width={500}
          height={300}
          slotProps={{
            legend: {
              direction: "column",
              position: { vertical: "middle", horizontal: "right" },
              padding: 0,
            },
          }}
        />
      )}
    </div>
  );
// <<<<<<< main
}
// =======
// }
// >>>>>>> main