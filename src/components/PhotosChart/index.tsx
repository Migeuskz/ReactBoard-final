// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianAxis, ResponsiveContainer } from 'recharts'
// import { Line, LineChart, ResponsiveContainer } from 'recharts';
// import {
//   Radar,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  
} from "recharts";
import { useUserPhotosData } from "../../hooks/useUserPhotosData";
import "./PhotosChart.css";
import Spinner from "../Spinner";

export default function PhotosChart() {
  const { data, loading, error } = useUserPhotosData();

  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ width: "100%", height: 260 }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Fotos subidas por usuario
      </h2>

      <ResponsiveContainer>
        {/* <BarChart data={data}>
          <CartesianAxis strokeDasharray={"3 3"}/>
          <XAxis dataKey="user"/>
          <YAxis/>
          <Tooltip/>
          <Bar dataKey="photos" fill='#4f46e5'/>
        </BarChart> */}

        {/* <LineChart width={300} height={100} data={data}>
          <Line type={"monotone"} dataKey={"photos"} stroke='#4f46e5' strokeWidth={2}/>
        </LineChart> */}

        {/* <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="user" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Abumns"
            dataKey="albums"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Radar
            name="Fotos subidas"
            dataKey="photos"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <div className="radarLegend">
            <Legend  />
            </div>
            </RadarChart>
            */}

        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="user" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="photos"
            stackId="1"
            stroke="#757de8"
            fill="#757de8"
          />
          <Area
            type="monotone"
            dataKey="albums"
            stackId="1"
            stroke="#2196F3"
            fill="#2196F3"
          />
          {/* <Legend layout="horizontal" verticalAlign="bottom" align="center" /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
