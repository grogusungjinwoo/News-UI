# Morning News UI

Morning News UI is a static GitHub Pages version of the dark, keyboard-navigable news board from `morning.py`. The `/docs` app uses HTML, CSS, and vanilla JavaScript so GitHub Pages can serve it without running Python on the server.

The Python script remains useful as a local curator and renderer. The deployable site in `/docs` is the static front-end version with a curated 40-article sample set across Scholar, Random, Science, and AI sections.

## Local Preview

Run this from the repository root:

```bash
python -m http.server 8000 --directory docs
```

Then open `http://127.0.0.1:8000/`.

## GitHub Pages Setup

In the GitHub repository, use:

`Settings > Pages > Deploy from a branch > main > /docs > Save`

The page uses relative asset paths, so it will work as a project site at `/News-UI/`.

## Development Checks

```bash
python -B -m unittest test_morning.py
python -B -m py_compile morning.py test_morning.py
```
