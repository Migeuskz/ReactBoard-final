import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianAxis, ResponsiveContainer } from 'recharts'
// import { Line, LineChart, ResponsiveContainer } from 'recharts';
import { useUserPhotosData } from '../../hooks/useUserPhotosData'
import './PhotosChart.css'

export default function PhotosChart() {

  const { data, loading, error } = useUserPhotosData();

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;
  
  return (
    <div style={{ width: "90%", height: 300}}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem"}}>
        Fotos subidas por usuario
      </h2>
      
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianAxis strokeDasharray={"3 3"}/>
          <XAxis dataKey="user"/>
          <YAxis/>
          <Tooltip/>
          <Bar dataKey="photos" fill='#4f46e5'/>
        </BarChart>
        {/* <LineChart width={300} height={100} data={data}>
          <Line type={"monotone"} dataKey={"photos"} stroke='#4f46e5' strokeWidth={2}/>
        </LineChart> */}
      </ResponsiveContainer>
    </div>
  )
}
