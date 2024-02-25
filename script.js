// Function to increase count for countDisplay1
function increaseCount1() {
    var countElement = document.getElementById("countDisplay1");
    var count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count;
}

// Function to decrease count for countDisplay1
function decreaseCount1() {
    var countElement = document.getElementById("countDisplay1");
    var count = parseInt(countElement.textContent);
    if (count > 0) {
        count--;
        countElement.textContent = count;
    }
}




