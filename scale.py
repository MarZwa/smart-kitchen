import mysql.connector
import time

import serial
import os

mydb = mysql.connector.connect(
    host="localhost",
    user="marc",
    passwd="password",
    database="SmartKitchenDb"
)
port = serial.Serial("/dev/ttyUSB0", baudrate=115200, timeout=3.0)

mycursor = mydb.cursor()

while True:
    weight = port.readline().split()
    if(len(weight) == 3):
<<<<<<< HEAD:scale.py
        updateQuery = "UPDATE users SET " + weight[1] + " = " + weight[1] + "+" + weight[2] + " WHERE rfid = '" + weight[0] + "';"
=======
        updateQuery = "UPDATE user_foods SET " + weight[1] + " = " + weight[1] + "+" + weight[2] + " WHERE tag = '" + weight[0] + "';"
>>>>>>> origin/development_marc_userStory1:main.py
        mycursor.execute(updateQuery)

    time.sleep(1)
    mydb.commit()

mydb.close()