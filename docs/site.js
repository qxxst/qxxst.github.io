"use strict";
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("worker.js").then(registration => {
        console.log("Service Worker registered.");
        console.log(registration);
    }).catch(error => {
        console.log("Service Worker registration failed.");
        console.log(error);
    });
}
else {
    console.log("Your browser does not support service workers.");
}
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('agreementModal');
    const agreeButton = document.getElementById('agreeButton');
    const content = document.getElementById('content');
    const preAgreeBackground = "qm-breathing";
    const postAgreeBackground = "qm-breathing";
    content.classList.add(preAgreeBackground);
    if (localStorage.getItem("agreedToTerms") !== "true") {
        modal.style.display = 'block';
    }
    else {
        removeModal();
    }
    function removeModal() {
        if (preAgreeBackground !== postAgreeBackground) {
            content.classList.remove(preAgreeBackground);
            content.classList.add(postAgreeBackground);
        }
        modal.style.display = 'none';
    }
    agreeButton.addEventListener('click', function () {
        removeModal();
        localStorage.setItem("agreedToTerms", "true");
    });
});
