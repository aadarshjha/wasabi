import requests
from bs4 import BeautifulSoup

URL = 'https://netnutrition.cbord.com/nn-prod/vucampusdining'
page = requests.get(URL)
soup = BeautifulSoup(page.content, 'html.parser')
print(soup.prettify())