# NetMirror Clone

A Django-based clone of a Netflix-style landing page. This repository includes a Django project named `netmirror` with a single app called `web`, featuring templates, static assets, and a homepage view.

## Project structure

- `manage.py` — Django project management script
- `netmirror/` — Django project configuration folder
- `web/` — main Django app that contains views, models, templates, and static files
- `db.sqlite3` — SQLite database file used for local development
- `venv/` — local Python virtual environment

## Features

- Django project setup with a simple web app
- Homepage template in `web/templates/home.html`
- Static assets for CSS, JavaScript, and images in `web/static/`

## Setup

1. Activate the virtual environment:

```bash
source venv/bin/activate
```

2. Install Django if it is not already installed:

```bash
pip install django
```

3. Apply database migrations:

```bash
python manage.py migrate
```

4. Start the Django development server:

```bash
python manage.py runserver
```

5. Open a browser and visit `http://127.0.0.1:8000/`

## Notes

- If a `requirements.txt` file is added later, install dependencies using `pip install -r requirements.txt`.
- This project is configured for local development and uses SQLite by default.
