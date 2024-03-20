"use strict";
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
