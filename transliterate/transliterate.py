from dotenv import load_dotenv

import requests, uuid, json, os

load_dotenv()

subscription_key = os.getenv("SUBSCRIPTION_KEY")
endpoint = "https://api.cognitive.microsofttranslator.com"

location = "centralindia"

path = '/transliterate'
constructed_url = endpoint + path

params = {
    'api-version': '3.0',
    'language': 'gu',
    'fromScript': 'gujr',
    'toScript': 'latn'
}
constructed_url = endpoint + path

headers = {
    'Ocp-Apim-Subscription-Key': subscription_key,
    'Ocp-Apim-Subscription-Region': location,
    'Content-type': 'application/json',
    'X-ClientTraceId': str(uuid.uuid4())
}

def transliterate(text):
  body = [{
      'text': text
  }]

  request = requests.post(constructed_url, params=params, headers=headers, json=body)
  response = request.json()

  return response
