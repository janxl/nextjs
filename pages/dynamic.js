import Layout from '../components/mylayout.js'
import dynamic from 'next/dynamic';
const DynamicComponent = dynamic(() => import('../components/dyn1.js'));

export default function Dyn() {
  return (
    <Layout>
      <DynamicComponent/>
    </Layout>
  )
}