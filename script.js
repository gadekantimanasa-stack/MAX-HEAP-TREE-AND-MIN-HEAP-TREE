// ===============================
// MIN HEAP
// ===============================

let minHeap = [];

// Insert into Min Heap
function insertMinHeap() {
    const input = document.getElementById("valueInput");
    const value = Number(input.value);

    if (input.value === "") {
        alert("Please enter a value");
        return;
    }

    minHeap.push(value);

    let index = minHeap.length - 1;

    // Heapify Up
    while (index > 0) {
        let parent = Math.floor((index - 1) / 2);

        if (minHeap[parent] <= minHeap[index]) {
            break;
        }

        [minHeap[parent], minHeap[index]] =
        [minHeap[index], minHeap[parent]];

        index = parent;
    }

    input.value = "";

    displayMinHeap();
}


// Delete Min Heap Root
function deleteMinRoot() {
    if (minHeap.length === 0) {
        alert("Min Heap is empty");
        return;
    }

    if (minHeap.length === 1) {
        minHeap.pop();
    } else {
        minHeap[0] = minHeap.pop();

        let index = 0;

        // Heapify Down
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (
                left < minHeap.length &&
                minHeap[left] < minHeap[smallest]
            ) {
                smallest = left;
            }

            if (
                right < minHeap.length &&
                minHeap[right] < minHeap[smallest]
            ) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            [minHeap[index], minHeap[smallest]] =
            [minHeap[smallest], minHeap[index]];

            index = smallest;
        }
    }

    displayMinHeap();
}


// ===============================
// MAX HEAP
// ===============================

let maxHeap = [];

// Insert into Max Heap
function insertMaxHeap() {
    const input = document.getElementById("valueInput");
    const value = Number(input.value);

    if (input.value === "") {
        alert("Please enter a value");
        return;
    }

    maxHeap.push(value);

    let index = maxHeap.length - 1;

    // Heapify Up
    while (index > 0) {
        let parent = Math.floor((index - 1) / 2);

        if (maxHeap[parent] >= maxHeap[index]) {
            break;
        }

        [maxHeap[parent], maxHeap[index]] =
        [maxHeap[index], maxHeap[parent]];

        index = parent;
    }

    input.value = "";

    displayMaxHeap();
}


// Delete Max Heap Root
function deleteMaxRoot() {
    if (maxHeap.length === 0) {
        alert("Max Heap is empty");
        return;
    }

    if (maxHeap.length === 1) {
        maxHeap.pop();
    } else {
        maxHeap[0] = maxHeap.pop();

        let index = 0;

        // Heapify Down
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = index;

            if (
                left < maxHeap.length &&
                maxHeap[left] > maxHeap[largest]
            ) {
                largest = left;
            }

            if (
                right < maxHeap.length &&
                maxHeap[right] > maxHeap[largest]
            ) {
                largest = right;
            }

            if (largest === index) {
                break;
            }

            [maxHeap[index], maxHeap[largest]] =
            [maxHeap[largest], maxHeap[index]];

            index = largest;
        }
    }

    displayMaxHeap();
}


// ===============================
// DISPLAY MIN HEAP
// ===============================

function displayMinHeap() {

    const tree = document.getElementById("minHeapTree");
    const array = document.getElementById("minHeapArray");

    tree.innerHTML = "";
    array.innerHTML = "";

    if (minHeap.length === 0) {
        tree.innerHTML = "<p>No elements</p>";
        return;
    }

    displayTree(minHeap, tree);

    minHeap.forEach(value => {
        const item = document.createElement("div");

        item.className = "array-item";
        item.textContent = value;

        array.appendChild(item);
    });
}


// ===============================
// DISPLAY MAX HEAP
// ===============================

function displayMaxHeap() {

    const tree = document.getElementById("maxHeapTree");
    const array = document.getElementById("maxHeapArray");

    tree.innerHTML = "";
    array.innerHTML = "";

    if (maxHeap.length === 0) {
        tree.innerHTML = "<p>No elements</p>";
        return;
    }

    displayTree(maxHeap, tree);

    maxHeap.forEach(value => {
        const item = document.createElement("div");

        item.className = "array-item";
        item.textContent = value;

        array.appendChild(item);
    });
}


// ===============================
// CREATE TREE LEVELS
// ===============================

function displayTree(heap, container) {

    let index = 0;
    let level = 0;

    while (index < heap.length) {

        const levelDiv = document.createElement("div");

        levelDiv.className = "tree-level";

        const nodesInLevel = Math.pow(2, level);

        for (
            let i = 0;
            i < nodesInLevel && index < heap.length;
            i++
        ) {

            const node = document.createElement("div");

            node.className = "node";
            node.textContent = heap[index];

            levelDiv.appendChild(node);

            index++;
        }

        container.appendChild(levelDiv);

        level++;
    }
}


// ===============================
// CLEAR BOTH HEAPS
// ===============================

function clearHeaps() {

    minHeap = [];
    maxHeap = [];

    displayMinHeap();
    displayMaxHeap();
}


// Initial Display
displayMinHeap();
displayMaxHeap();
