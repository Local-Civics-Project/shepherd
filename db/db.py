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

# Make instance available to external packages
def getInstance():

  return con

if __name__ == "__main__":
  con = getInstance()
  cur = con.cursor()

  cur.execute("SELECT * FROM representatives")
  con.commit()

  rows = cur.fetchall()

  print(rows)
