// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianAxis, ResponsiveContainer } from 'recharts'
// import { Line, LineChart, ResponsiveContainer } from 'recharts';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useUserPhotosData } from '../../hooks/useUserPhotosData'
import './PhotosChart.css'
import Spinner from '../Spinner';

export default function PhotosChart() {

  const { data, loading, error } = useUserPhotosData();

  if (loading) return <Spinner />
  if (error) return <p>{error}</p>;

  return (
    <div style={{ width: "90%", height: 300 }}>
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

        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="user" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Fotos subidas" dataKey="photos" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          {/* <Radar name={userPhoto.name} dataKey="photos" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} /> */}
          <Legend />
        </RadarChart>

      </ResponsiveContainer>
    </div>
  )
}
