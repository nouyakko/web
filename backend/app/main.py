from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import psycopg2
import os

app = FastAPI()

# CORS設定を追加
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080", "http://localhost:3000"],  # フロントエンドのURL
    allow_credentials=True,
    allow_methods=["*"],  # すべてのHTTPメソッドを許可
    allow_headers=["*"],  # すべてのヘッダーを許可
)

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI"}

@app.get("/db")
def db_check():
    conn = psycopg2.connect(
        host=os.getenv("DB_HOST", "db"),
        dbname=os.getenv("POSTGRES_DB", "appdb"),
        user=os.getenv("POSTGRES_USER", "user"),
        password=os.getenv("POSTGRES_PASSWORD", "password")
    )
    cur = conn.cursor()
    cur.execute("SELECT 1;")
    result = cur.fetchone()
    cur.close()
    conn.close()
    return {"db": result[0]}
