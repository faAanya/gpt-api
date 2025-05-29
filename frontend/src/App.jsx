import styles from './index.module.css'
import nlpImg from './assets/nlp.png'
import { useState } from 'react'
function App() {
  const [queryDesc, setQueryDesc] = useState("")
  const [sqlQuery, setSqlQuery] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();

    const generatedSqlQuery = await generateQuery();
    setSqlQuery(generatedSqlQuery);
    console.log("returned: ", generatedSqlQuery);

  }

  const generateQuery = async () => {
    const response = await fetch("http://localhost:3005/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ queryDesc: queryDesc })
    });

    const data = await response.json();
    return data.response.trim();
  }
  return (
    <main className={styles.main}>
      <img src={nlpImg} className={styles.icon} />
      <h2>Ask your question for AI bot</h2>

      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='query-desc'
          placeholder='Your question'
          onChange={(e) => { setQueryDesc(e.target.value) }}
        >

        </input>
        <input
          type='submit'
          value='Generate answer'>
        </input>
        <textarea
          rows={5}
          cols={35}
          placeholder={"Add your feedback"}
          value={sqlQuery}
        />

      </form>
    </main>
  )
}

export default App
