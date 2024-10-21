from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import Select
import time

chrome_driver_path = '/opt/homebrew/bin/chromedriver'

service = Service(executable_path=chrome_driver_path)

driver = webdriver.Chrome(service=service)

driver.maximize_window()

#Setting up the wait time(in seconds)
driver.implicitly_wait(100)

driver.get("http://127.0.0.1:4000/model")

time.sleep(3)

trek = Select(driver.find_element(By.ID, "Encoded_Trek"))
trek.select_by_visible_text("Annapurna Base Camp Heli Trek")

time.sleep(3)

start_date = driver.find_element(By.ID, "start-date")
start_date.send_keys("23/10/2024")

end_date = driver.find_element(By.ID, "end-date")
end_date.send_keys("10/11/2024")

time.sleep(3)

sex = Select(driver.find_element(By.ID, "sex"))
sex.select_by_visible_text("Male")

time.sleep(3)

age = driver.find_element(By.ID, "age")
age.send_keys("23")

time.sleep(3)

estimate = driver.find_element(By.XPATH, '//button[text()="Estimate"]')
estimate.click()

time.sleep(10)

driver.quit()




