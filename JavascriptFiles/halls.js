export class Hall {
    constructor() {
        this.paths = [];
        const paths_levels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        paths_levels.forEach(level => {
            this.paths.push(new Path(level, 99, paths_levels));
        });
    }
    createGraph() {
        const graph = {
            main: {},
            sideone: {},
            sidetwo: {},
        };
        this.paths.forEach(path => {
            graph[path.name] = {};
        });
        for (let i = 0; i < 26; i++) {
            const key = String.fromCharCode(65 + i);
            graph[key] = { main: 1 };

            if (i < 13) {
                graph["sideone"][key] = 1
                graph[key]["sideone"] = 1

            } else {
                graph["sidetwo"][key] = 1
                graph[key]["sidetwo"] = 1
            }

            // Linking to the main graph
            graph.main[key] = 1;
        }

        return graph;
    }

    returnPaths() {
        return this.createGraph();
    }
}

class Path {
    constructor(name, positions, level) {
        this.name = name;
        this.positions = positions;
        this.level = level;
    }
}
