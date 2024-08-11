import json
import pandas as pd
import collections

data = pd.read_json('./src/graph.json')
# print(data.to_string())
counter = collections.defaultdict(int)

for link in data['links']:
    counter[link['source'].strip()] += 1

print(max(counter))
print(counter['Reduction in BACE1 decreases body weight, protects against diet-induced obesity and enhances insulin sensitivity in mice'])