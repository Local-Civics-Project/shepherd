from dotenv import load_dotenv
import psycopg2
import os

load_dotenv()

PGUSER = os.getenv("PGUSER")
PGHOST = os.getenv("PGHOST")
PGPORT = os.getenv("PGPORT")
PGPASSWORD = os.getenv("PGPASSWORD")
PGDATABASE = os.getenv("PGDATABASE")

con = psycopg2.connect(
  user=PGUSER,
  host=PGHOST,
  port=PGPORT,
  password=PGPASSWORD,
  database=PGDATABASE
)

cur = con.cursor()

cur.execute("SELECT * FROM representatives")
con.commit()

rows = cur.fetchall()

print(rows)
