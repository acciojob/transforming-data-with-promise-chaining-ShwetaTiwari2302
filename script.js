//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
    const inputNumber = parseInt(document.getElementById("ip").value);
    const outputDiv = document.getElementById("output");

    // Initial Promise to get input number after 2 seconds
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(inputNumber)) {
                reject("Please enter a valid number.");
            } else {
                outputDiv.textContent = `Result: ${inputNumber}`;
                resolve(inputNumber);
            }
        }, 2000);
    })
    // Multiply by 2
    .then(number => {
        return new Promise(resolve => {
            setTimeout(() => {
                const result = number * 2;
                outputDiv.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Subtract 3
    .then(number => {
        return new Promise(resolve => {
            setTimeout(() => {
                const result = number - 3;
                outputDiv.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Divide by 2
    .then(number => {
        return new Promise(resolve => {
            setTimeout(() => {
                const result = number / 2;
                outputDiv.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Add 10
    .then(number => {
        return new Promise(resolve => {
            setTimeout(() => {
                const result = number + 10;
                outputDiv.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Display Final Result
    .then(finalResult => {
        outputDiv.textContent = `Final Result: ${finalResult}`;
    })
    // Handle errors
    .catch(error => {
        outputDiv.textContent = `Error: ${error}`;
    });
});

