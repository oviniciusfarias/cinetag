import styles from './Home.module.css'
import Banner from "components/Banner"
import SectionTitle from "components/SectionTitle"
import Card from "components/Card"
import Container from 'components/Container'
import { useEffect, useState } from 'react'

const PageHome = () => {
  const [ videos, setVideos ] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/oviniciusfarias/cinetag-api/videos')
      .then(response => response.json())
      .then(data => {
        setVideos(data)
      })
  }, [])

  return (
    <main>
      <Banner image="home" />
      <Container>
        <SectionTitle>
          <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </SectionTitle>

        {/* <Card id="1" title="Gato bonifácio" coverImage='https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img2.png' /> */}

        <section className={styles.container}>
          {videos.map((videoItem) => {
            return <Card 
              key={videoItem.id}
              id={videoItem.id}
              title={videoItem.title}
              coverImage={videoItem.coverImage}
            />
          })}
        </section>
      </Container>
    </main>
  )
}

export default PageHome