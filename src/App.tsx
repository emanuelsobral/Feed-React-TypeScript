import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './app.module.css'

import './global.css';

const posts = [
  //post 1
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/82630009?v=4",
      name: "Emanuel Sobral",
      role: "Web Developer",
    },
    content: [
      {type: "paragraph", content:'Fala galeraa 👋'},
      {type: "paragraph", content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: "link", content:'👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date("2022-10-04 15:06:00"),
  },
  //Post 2
  {
    id: 2,
    author: {
      avatarUrl: "https://pps.whatsapp.net/v/t61.24694-24/299444415_460858515771646_9116918246329170910_n.jpg?ccb=11-4&oh=01_AVyOwJ9K9JOcls-u96DGkkEpWYHAbGIHql64VKKax0cX5g&oe=634B0698",
      name: "Jose Augusto",
      role: "Pintor de Rodape",
    },
    content: [
      {type: "paragraph", content:'Fala pessoal 👋'},
      {type: "paragraph", content:'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 '},
      {type: "paragraph", content:'Acesse e deixe seu feedback'},
      {type: "link", content:'👉 devonlane.design'},
    ],
    publishedAt: new Date("2022-10-04 15:12:00"),
  },
];

export function App() {

  return (
    <div>

      <Header/>

      <div className={styles.wrapper}>

        <Sidebar />

        <main>     
          {posts.map(post => {
            return (<Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt = {post.publishedAt}
             />)
          })}
        </main>

      </div>

    </div>
  )
}

