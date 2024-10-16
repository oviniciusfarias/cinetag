import Banner from 'components/Banner'
import styles from './Video.module.css'
import Container from 'components/Container'
import SectionTitle from 'components/SectionTitle'
import { useParams } from 'react-router-dom'
import Page404 from 'pages/404'
import { useEffect, useState } from 'react'

const PageVideo = () => {
  const [video, setVideo] = useState()
  const params = useParams()
  // const video = videos.find((video) => video.id === Number(params.id))
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/oviniciusfarias/cinetag-api/videos?id=${params.id}`)
      .then(response => response.json())
      .then(data => {
        // console.log()
        setVideo(...data)
      })
  }, [])

  if (!video) {
    return <Page404 />
  }

  return (
    <main>
      <Banner image="player" />

      <Container>
        <SectionTitle>
          <h1>Player</h1>
        </SectionTitle>

        <iframe 
          className={styles.video}
          src={video.link} 
          title={video.title} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        > 
        </iframe>
        <code>
          {JSON.stringify(video)}
        </code>
      </Container>
    </main>
  )
}

export default PageVideo