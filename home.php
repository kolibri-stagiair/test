<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dijkstra Algorithm</title>
    <script type="module" src="JavascriptFiles/FW.js" defer></script>
    <style>
        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh; /* Ensure content is not cut off */
            background-color: #f0f0f0;
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
            overflow: auto; /* Allow scrolling if content exceeds viewport */
        }
        h1 {
            margin-bottom: 20px;
            text-align: center; /* Center align heading */
        }
        label {
            margin-top: 10px;
        }
        input {
            width: 100%;
            max-width: 300px;
            padding: 10px;
            margin-bottom: 10px;
            box-sizing: border-box;
        }
        button {
            width: 100%;
            max-width: 300px;
            padding: 10px;
            background-color: #4caf50;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 16px;
            margin-bottom: 20px;
        }
        button:hover {
            background-color: #45a049;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
            gap: 5px;
            margin-top: 20px;
            max-width: 300px; /* Limit grid width */
        }
        .square {
            width: 60px;
            height: 60px;
            background-color: #4caf50;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            color: white;
            border: 2px solid #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s;
        }
        #results {
            margin-top: 20px;
            width: 100%;
            max-width: 300px;
            background-color: #fff;
            border: 1px solid #ccc;
            padding: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            overflow: auto; /* Scrollable if content is too long */
        }
    </style>
</head>
<body>
<h1>Dijkstra Algorithm</h1>
<label for="start">Start Node:</label>
<input type="text" id="start" placeholder="e.g. A">

<label for="goal">Goal Node:</label>
<input type="text" id="goal" placeholder="e.g. B,C">

<button id="run">Run algorithm</button>

<h2>Results</h2>
<div id="results">
    <pre id="route"></pre>
</div>

<div class="grid">
    <div id="N" class="square">N</div>
    <div id="O" class="square">O</div>
    <div id="P" class="square">P</div>
    <div id="Q" class="square">Q</div>
    <div id="R" class="square">R</div>
    <div id="S" class="square">S</div>
    <div id="T" class="square">T</div>

    <div id="H" class="square">H</div>
    <div id="I" class="square">I</div>
    <div id="J" class="square">J</div>
    <div id="X" class="square">X</div>
    <div id="K" class="square">K</div>
    <div id="L" class="square">L</div>
    <div id="M" class="square">M</div>

    <div id="A" class="square">A</div>
    <div id="B" class="square">B</div>
    <div id="C" class="square">C</div>
    <div id="D" class="square">D</div>
    <div id="E" class="square">E</div>
    <div id="F" class="square">F</div>
    <div id="G" class="square">G</div>
</div>

<script type="module">
    import { FW } from './JavascriptFiles/FW.js';
    import { Hall } from "./JavascriptFiles/halls.js";

    const halls = new Hall();
    const paths = halls.returnPaths();
    console.log(paths);

    let g = {
        A: { B: 10, H: 15 },
        B: { A: 10, C: 10, I: 15 },
        C: { B: 10, J: 15, D: 5 },
        D: { E: 5, C: 15, X: 15 },
        E: { D: 5, K: 15, F: 10 },
        F: { E: 10, L: 15, G: 10 },
        G: { F: 10, M: 15 },
        H: { A: 15, I: 10, N: 15 },
        I: { H: 10, B: 15, J: 10, O: 15 },
        J: { I: 10, P: 15, C: 15, X: 10 },
        K: { X: 10, R: 15, L: 10, E: 15 },
        L: { M: 10, K: 10, S: 15, F: 15 },
        M: { L: 10, G: 15, T: 15 },
        N: { O: 10, H: 15 },
        O: { I: 15, N: 10, P: 10 },
        P: { O: 10, Q: 10, J: 15 },
        Q: { P: 10, X: 15, R: 10 },
        R: { Q: 10, K: 15, S: 10 },
        S: { R: 10, L: 15, T: 10 },
        T: { M: 15, S: 10 },
        X: { J: 10, K: 10, D: 15, Q: 15 }
    };

    document.getElementById('run').addEventListener('click', function () {
        const startNode = document.getElementById('start').value;
        const goalNode = document.getElementById('goal').value;
        let goalArr = goalNode.split(',');

        const fw = new FW();
        let path = fw.Index(g, startNode, goalArr[goalArr.length - 1], goalArr);

        // Clear previous colors
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.style.backgroundColor = '#4caf50';
        });

        path.forEach(square => {
            if (square.length >= 1) {
                console.log("Square: " + path)
                square.forEach(x =>
                    document.getElementById(x).style.backgroundColor = 'red'
                );
            }
        });

        document.getElementById('route').textContent = path[0].join('->');
    });
</script>
</body>
</html>
