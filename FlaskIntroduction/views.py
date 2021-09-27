from flask import Blueprint, render_template

views = Blueprint(__name__, "views")

@views.route("/")
def home():
    return render_template("index.html")

@views.route("/test")
def home2():
    return "test page"