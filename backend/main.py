from fastapi import FastAPI
import psycopg2

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI"}

@app.get("/db")
def db_check():
    conn = psycopg2.connect(
        host="db",
        dbname="appdb",
        user="user",
        password="password"
    )
    cur = conn.cursor()
    cur.execute("SELECT 1;")
    result = cur.fetchone()
    cur.close()
    conn.close()
    return {"db": result[0]}
