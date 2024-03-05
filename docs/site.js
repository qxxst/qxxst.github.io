"use strict";
document.addEventListener('DOMContentLoaded', function () {
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
    function getCookie(name) {
        const cookieName = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return "";
    }
    const modal = document.getElementById('agreementModal');
    const agreeButton = document.getElementById('agreeButton');
    const content = document.getElementById('content');
    const preAgreeBackground = "qm-breathing";
    const postAgreeBackground = "qm-breathing";
    content.classList.add(preAgreeBackground);
    function removeModal() {
        if (preAgreeBackground !== postAgreeBackground) {
            content.classList.remove(preAgreeBackground);
            content.classList.add(postAgreeBackground);
        }
        modal.style.display = 'none';
    }
    function playAudio() {
        const audioUrl = "https://cdn.discordapp.com/attachments/1213958929894346823/1213971035209212005/rb-2024-low-pass.wav?ex=65f769a1&is=65e4f4a1&hm=17e577a6e92742bd97f62eb41a9458ae6c8e6624973c255b683c792f577c0cda&";
        const audio = new Audio(audioUrl);
        audio.volume = 0.1;
        setTimeout(function () {
            audio.play();
            audio.addEventListener('ended', function () {
                this.currentTime = 0;
                this.play();
            }, false);
        }, 500);
    }
    const agreedToTerms = getCookie("agreedToTerms");
    if (agreedToTerms == false || agreedToTerms == undefined || agreedToTerms == null) {
        modal.style.display = 'block';
    }
    else {
        removeModal();
        playAudio();
    }
    agreeButton.addEventListener('click', function () {
        setCookie("agreedToTerms", true, 365);
        removeModal();
        playAudio();
    });
});
