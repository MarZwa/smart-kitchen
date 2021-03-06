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
        updateQuery = "UPDATE users SET " + weight[1] + " = " + weight[1] + "+" + weight[2] + " WHERE rfid = '" + weight[0] + "';"
        mycursor.execute(updateQuery)

    time.sleep(1)
    mydb.commit()

mydb.close()