import Head from 'next/head'
import styles from '../styles/Pet.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quiz 1_5935512014</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div><h1>PET SHOP</h1>
        <div>Income : { }</div></div>
      <br></br>
      <div className={styles.formadd}>
        <div>
          price
      <input type="text"
            name="addTask"
            onChange={(e) => (setName(e.target.value))}
          />
        </div>
        <div>
          Weight
      <input type="text"
            name="addTask"
            onChange={(e) => (setName(e.target.value))}
          />
        </div>
        <div>
          age
      <input type="text"
            name="addTask"
            onChange={(e) => (setName(e.target.value))}
          />
        </div>
        <div>
          type
      <input type="text"
            name="addTask"
            onChange={(e) => (setName(e.target.value))}
          />
        </div>
        <button className={styles.buttonAdd} onClick={() => addTask(name)}>Add new pet</button>


      </div>
    </div>
  )
}
