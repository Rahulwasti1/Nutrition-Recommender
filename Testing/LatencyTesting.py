import time
import requests

def test_response_time():
    start_time = time.time() # This line records the current time before making HTTP request.
    response = requests.get("http://127.0.0.1:4000/")
    latency = time.time() - start_time 
    print(f"HTTP GET request to 'http://localhost:4000' completed in {latency:.4f} seconds")
    assert latency < 1

test_response_time()



