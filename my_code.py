import requests
import openai
import webbrowser


question = input(('What Create: '))



openai.api_key = "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"
response = openai.Image.create(
  prompt=question,
  n=1,
  size="1024x1024"
)
image_url = response['data'][0]['url']

webbrowser.open(image_url)