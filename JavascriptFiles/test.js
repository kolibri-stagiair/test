//Sort of a TSP, might have to make a custom solution :(
/* TODO Summary : I need to develop an algorithm that manages to find the shortest path through a variety of points
*   Lets say you have startpoint : A with waypoints : C,D,P,L,Q
*   1 Idea : it might be an idea to calculate the routing to all nearby points, and from those points calculate the closest
*   not yet visited node, with the point with the most nearby nodes being used as a starting points (might need to visualise
*   to help with creation)
*   2 Idea: */


function Algorithm(graph,start,goals)
{
    const result = dijkstra(graph,start)
    let goalArr = goals.split(',')
    const routes = []
    for (const goalArrKey in goalArr) {
        routes.push(getPath(result.previous,goalArr[goalArrKey]))
    }
    let total = [routes[0]]

    for (const rKey in routes)
    {
        const curRoute = (routes[rKey])
        const updatedTotal = total.map(val => {

            if (val.every(x => curRoute.includes(x))) {
                return curRoute;
            }
            return val; //
        });
        total = updatedTotal
        if (!total.some(val => curRoute.every(x => val.includes(x))) && !total.includes(curRoute))
        {
            if(!total.includes(curRoute))
            {
                total.push(curRoute)
            }
        }
    }
  return total
}
function dijkstra(graph, start) {
    let distances = {};
    let previous = {}
    let visited = new Set();
    let nodes = Object.keys(graph);
    for (let node of nodes) {
        distances[node] = Infinity;
        previous[node] = null
    }
    distances[start] = 0;
    while (nodes.length) {
        nodes.sort((a, b) => distances[a] - distances[b]);
        let closestNode = nodes.shift();
        if (distances[closestNode] === Infinity) break;
        visited.add(closestNode);
        for (let neighbor in graph[closestNode]) {
            if (!visited.has(neighbor)) {
                let newDistance = distances[closestNode] + graph[closestNode][neighbor];
                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                    previous[neighbor] = closestNode
                }
            }
        }
    }
    return {distances,previous};
}
function getPath(previous,target){
    let path = []
    let currentNode = target;

    while(currentNode){
        path.unshift(currentNode)
        currentNode=previous[currentNode]
    }
    return path;
}

function shortestRouteTotal(graph,start,goal,routes = null)
{

    const shortest_route = routes.reduce((prev, next) => prev.length > next.length ? next : prev)
    let goalArr = goal.split(',')
    let index = 0
    let goal_passed = []
    let route = [shortest_route]
    for (const pas in shortest_route)
    {
        if(goal.includes(shortest_route[pas])){
            goal_passed.push(shortest_route[pas])
            index+=1
        }
    }

    while(goal_passed.length < goalArr.length)
    {
        const nearby = (dijkstra(graph, (goal_passed[goal_passed.length - 1])))
        let num = 0
        let closest = ''
        let dis = nearby.distances
        for (const disKey in dis)
        {
            if(goalArr.includes(disKey) && !goal_passed.includes(disKey)) {
                if(num === 0 ||  dis[disKey] <=num)
                {
                    num = dis[disKey]
                    closest = disKey
                }
            }
        }
        goal_passed.push(closest)
        route.push(getPath(nearby.previous,closest))
    }

    return route
}
function main (start,goal,graph){
    return shortestRouteTotal(graph,start,goal,(Algorithm(graph,start,goal)))
}
