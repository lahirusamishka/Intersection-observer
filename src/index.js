const container = document.querySelector(".container");
const content = document.querySelector(".content");
const btn = document.querySelector(".btn");
let isVisible = null;

const observerCallback = (entries) => {
    const targetElement = entries[0];
    if (targetElement.isIntersecting) {
        isVisible = true;
        loadMoreContent(); // Load more elements when the target is visible
    } else {
        isVisible = false;
    }
};

const observerOptions = {
    root: container,
    threshold: 1
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Start observing the target element
const target = document.querySelector(".target");
observer.observe(target);

btn.addEventListener("click", () => {
    if (isVisible) {
        alert("Target Element is visible");
    } else {
        alert("Target Element is not visible");
    }
});

function loadMoreContent() {
    // Add 5 more content elements dynamically
    for (let i = 0; i < 5; i++) {
        const newElement = document.createElement("p");
        newElement.textContent = "GeeksforGeeks - New Content";
        content.insertBefore(newElement, target);
    }

    // Re-observe the target to check the visibility for the next load
    observer.unobserve(target);
    content.appendChild(target);
    observer.observe(target);
}
