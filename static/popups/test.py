import pandas as pd

# Read the CSV file
csv_file = r'C:\Users\archi\OneDrive\Desktop\Personal Work\Mario Map Project\Mario Map v3\static\popups\Waypoints.csv'
df = pd.read_csv(csv_file)

# Count the unique entries in the "game" column
unique_games = df['game'].nunique()

# Print the number of unique entries
print(f"There are {unique_games} unique entries in the 'game' column.")