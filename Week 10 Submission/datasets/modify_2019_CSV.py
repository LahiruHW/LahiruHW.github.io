
import os
import pandas as pd

# read the csv file 
df = pd.read_csv("Week 10 Submission/datasets/2019.csv")

# if "2019_modified.csv" exists, delete it
if os.path.exists("Week 10 Submission/datasets/2019_modified.csv"):
    os.remove("Week 10 Submission/datasets/2019_modified.csv")  

# set the value of "Happiness_Class" according to the Happiness_Score
df.loc[ (df["Happiness_Score"] >= 0) & (df["Happiness_Score"] < 1) , "Happiness_Class" ] = 0
df.loc[ (df["Happiness_Score"] >= 1) & (df["Happiness_Score"] < 2) , "Happiness_Class" ] = 1
df.loc[ (df["Happiness_Score"] >= 2) & (df["Happiness_Score"] < 3) , "Happiness_Class" ] = 2
df.loc[ (df["Happiness_Score"] >= 3) & (df["Happiness_Score"] < 4) , "Happiness_Class" ] = 3
df.loc[ (df["Happiness_Score"] >= 4) & (df["Happiness_Score"] < 5) , "Happiness_Class" ] = 4
df.loc[ (df["Happiness_Score"] >= 5) & (df["Happiness_Score"] < 6) , "Happiness_Class" ] = 5
df.loc[ (df["Happiness_Score"] >= 6) & (df["Happiness_Score"] < 7) , "Happiness_Class" ] = 6
df.loc[ (df["Happiness_Score"] >= 7) & (df["Happiness_Score"] < 8) , "Happiness_Class" ] = 7

# save the dataframe as a new csv file
df.to_csv("Week 10 Submission/datasets/2019_modified.csv", index=False)
