from datetime import datetime
from dateutil.relativedelta import relativedelta
from typing import Any

from fastapi import FastAPI, Form, status
from fastapi.responses import RedirectResponse

from services.database import JSONDatabase

app = FastAPI()

database: JSONDatabase[list[dict[str, Any]]] = JSONDatabase("data/database.json")


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
    print(name, message)
    now = datetime.now().replace(microsecond=0)
    post = {
        "name": name,
        "message": message,
        "time": now.isoformat(),
    }
    database["posts"].append(post)

    return RedirectResponse("/", status.HTTP_303_SEE_OTHER)


# TODO: add another API route with a query parameter to retrieve quotes based on max age
@app.get("/quote/")
def send_message(maxAge: int) -> list[dict[str, Any]]:
    if maxAge == 0:
        return database["posts"]
    elif maxAge == 1:
        #get quotes up to last year
        ly = datetime.now() - relativedelta(years=1)
        return [post for post in database["posts"] if post["time"] >= ly.isoformat()]
    elif maxAge == 2:
        #get quotes up to last month
        lm = datetime.now() - relativedelta(months=1)
        return [post for post in database["posts"] if post["time"] >= lm.isoformat()]
    elif maxAge == 3:
        #get quotes up to last week
        lw = datetime.now() - relativedelta(weeks=1)
        return [post for post in database["posts"] if post["time"] >= lw.isoformat()]
