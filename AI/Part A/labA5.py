#part1  5th one

from collections import deque

graph={
    'A':['B','C'],
    'B':['D','E'],
    'C':['F'],
    'D':[],
    'E':['F'],
    'F':[]
}

#BFS

def bfs(start):
    visited=set()
    queue=deque([start])
    while queue:
        node=queue.popleft()
        if node not in visited:
            print(node,end="")
            visited.add(node)
            queue.extend(graph[node])

#DFS

def dfs(node,visited=None):
    if visited is None:
        visited=set()
    if node not in visited:
        print(node,end="")
        visited.add(node)
        for neighbor in graph[node]:
            dfs(neighbor,visited)
print("BFS:")
bfs('A')
print("\nDFS:")
dfs('A')
