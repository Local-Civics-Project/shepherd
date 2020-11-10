from transliterate import transliterate

response = transliterate("સંકેત")

def test_response():
  assert len(response) > 0
  assert response[0]["text"] == "sanket"
