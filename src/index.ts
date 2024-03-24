if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("js/worker.js").then(registration => {
        console.log("Service Worker registered.");
        console.log(registration);
    }).catch(error => {
        console.log("Service Worker registration failed.");
        console.log(error);
    })
}
else {
    console.log("Your browser does not support service workers.");
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('agreementModal') as HTMLElement;
    const agreeButton = document.getElementById('agreeButton') as HTMLElement;
    const content = document.getElementById('content') as HTMLElement;

    type background = "qm-breathing" | null;

    const preAgreeBackground: background = null;
    const postAgreeBackground: background = null;

    if (preAgreeBackground !== null) {
        content.classList.add(preAgreeBackground);
    }

    if (localStorage.getItem("agreedToTerms") !== "true") {
        modal.style.display = 'block';
    } else {
        removeModal();
    }

    function removeModal() {
        if (preAgreeBackground !== null && postAgreeBackground !== null) {
            if (preAgreeBackground !== postAgreeBackground) {
                content.classList.remove(preAgreeBackground);
                content.classList.add(postAgreeBackground);
            }
        }

        modal.style.display = 'none';
    }

    agreeButton.addEventListener('click', function() {
        removeModal();
        localStorage.setItem("agreedToTerms", "true");
    });
});