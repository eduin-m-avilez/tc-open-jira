import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'
import { Layout } from '../components/layout'

//Style
import styles from '../styles/Home.module.css'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Typography variant='h1' color='primary'> Hello World</Typography>
    </Layout>
    
  )
}

export default HomePage
