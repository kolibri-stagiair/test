export class FW {

    * dfsGenerator(graph, start, goal, visited = new Set(), path = []) {
        visited.add(start); // Mark the current node as visited
        path.push(start);   // Add the current node to the path

        // Check if the current node is the goal
        if (start === goal) {
            yield [...path]; // Yield a copy of the current path
        } else {
            // Explore all neighbors
            for (const neighbor of graph[start]) {
                if (!visited.has(neighbor)) { // Check if neighbor is not visited
                    yield* this.dfsGenerator(graph, neighbor, goal, visited, path);
                }
            }
        }

        // Backtrack: remove the current node from the path and mark it unvisited
        path.pop();
        visited.delete(start);
    }






    DFS(graph, start, end, path = [], total_weight = 0) {
        path = [...path, start];


        if (start === end) {
            return [[path, total_weight]];
        }

        if (!graph[start]) {
            return [];
        }

        let paths = [];
        graph[start].forEach(neighbor=> {
            if (!path.includes(neighbor)) {
                const weight = graph[start][neighbor] || 0;
                const newPaths = this.DFS(graph, neighbor, end, path, total_weight + weight);
                paths.push(...newPaths);
            }
        })
        return paths;
    }

    Index(graph, start, end, goals = []) {
        const paths = this.DFS(graph, start, end);
        const validPaths = paths.filter(subPath => {
            const allGoalsIncluded = goals.every(goal => subPath[0].includes(goal));

            return allGoalsIncluded;
        });
        const sortedPaths = validPaths.sort((a, b) => a[1] - b[1]);
        const result = sortedPaths.length > 0 ? sortedPaths[0] : null;
        return result;
    }
     f() {

    }
}
