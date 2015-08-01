from selenium import webdriver
import time


for i in range(1, 178):
    driver = webdriver.Firefox()

    driver.get("http://localhost:8000")

    time.sleep(3)
    print("waiting--------------------------")

    submit_button = driver.find_element_by_name("submit" + str(i))
    submit_button.click()
    print("successfully clicked on button #" + str(i))

    i += 1
    driver.quit()

