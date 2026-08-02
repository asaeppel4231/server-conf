# Short minimizer tool, generated with AI

import re
import sys
import os

def minify_html(text):
    text = re.sub(r"<!--.*?-->", "", text, flags=re.DOTALL)
    text = re.sub(r"\s+", " ", text)
    return text.strip()

def minify_css(text):
    text = re.sub(r"/\*.*?\*/", "", text, flags=re.DOTALL)
    text = re.sub(r"\s+", " ", text)
    text = re.sub(r"\s*([{}:;,])\s*", r"\1", text)
    return text.strip()

if __name__ == "__main__":
    path = sys.argv[1]
    text = open(path).read()

    if path.endswith(".html"):
        open(path, "w").write(minify_html(text))
    elif path.endswith(".css"):
        open(path, "w").write(minify_css(text))

