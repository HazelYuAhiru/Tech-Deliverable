from datetime import datetime
from dateutil.relativedelta import relativedelta
from typing import Any

from fastapi import FastAPI, Form, status
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware #

from services.database import JSONDatabase

app = FastAPI()

database: JSONDatabase[list[dict[str, Any]]] = JSONDatabase("data/database.json")

origins = ["*"] #

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup() -> None:
    if "posts" not in database:
        print("Adding posts entry to database")
        database["posts"] = []


@app.on_event("shutdown")
def on_shutdown() -> None:
    database.close()


@app.post("/quote")
def post_message(name: str = Form(), message: str = Form()) -> RedirectResponse:
    """
    Process a user submitting a new quote.
    You should not modify this function.
    """
    now = datetime.now().replace(microsecond=0)
    post = {
        "name": name,
        "message": message,
        "time": now.isoformat(),
    }
    database["posts"].append(post)

    return RedirectResponse("/", status.HTTP_303_SEE_OTHER)


# TODO: add another API route with a query parameter to retrieve quotes based on max age
@app.get("/getquote")
def send_message(ageFilter: int):
    if ageFilter == 0:
        return database["posts"]
    elif ageFilter == 1:
        #get quotes up to last year
        ly = datetime.now() - relativedelta(years=1)
        return [post for post in database["posts"] if post["time"] >= ly.isoformat()]
    elif ageFilter == 2:
        #get quotes up to last month
        lm = datetime.now() - relativedelta(months=1)
        return [post for post in database["posts"] if post["time"] >= lm.isoformat()]
    elif ageFilter == 3:
        #get quotes up to last week
        lw = datetime.now() - relativedelta(weeks=1)
        return [post for post in database["posts"] if post["time"] >= lw.isoformat()]
