import requests 
from bs4 import BeautifulSoup 
import csv 
  
URL = "https://www.cmch-vellore.edu/Departments.aspx?depttype=ALL"
r = requests.get(URL) 
  
soup = BeautifulSoup(r.content, 'html5lib') 
  
departments=[]  # a list to store quotes 
for i in range(0,32):
    data="content_DL_Dept_list1_lnkbtn_DeptList_col2_"+str(i)  
    table = soup.find('a', attrs = {'id':data})
    for name in table:
        departments.append(name) 
  

import csv

with open('departments.csv', mode='a') as csv_file:
    for i in departments:
        ob=str(i)+"\n"
        csv_file.write(ob)