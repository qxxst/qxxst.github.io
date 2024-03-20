document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('agreementModal') as HTMLElement;
    const agreeButton = document.getElementById('agreeButton') as HTMLElement;
    const content = document.getElementById('content') as HTMLElement;

    const preAgreeBackground: string = "qm-breathing";
    const postAgreeBackground: string = "qm-breathing";

    content.classList.add(preAgreeBackground);
    if (localStorage.getItem("agreedToTerms") !== "true") {
        modal.style.display = 'block';
    } else {
        removeModal();
    }

    function removeModal() {
        if (preAgreeBackground !== postAgreeBackground) {
            content.classList.remove(preAgreeBackground);
            content.classList.add(postAgreeBackground);
        }

        modal.style.display = 'none';
    }

    agreeButton.addEventListener('click', function() {
        removeModal();
        localStorage.setItem("agreedToTerms", "true");
    });
});