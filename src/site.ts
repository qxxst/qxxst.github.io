document.addEventListener('DOMContentLoaded', function() {
    /* function setCookie(name: string, value: string, days: number) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name: string) {
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
    } */

    const modal = document.getElementById('agreementModal') as HTMLElement;
    const agreeButton = document.getElementById('agreeButton') as HTMLElement;
    const content = document.getElementById('content') as HTMLElement;

    const preAgreeBackground: string = "qm-breathing";
    const postAgreeBackground: string = "qm-breathing";

    modal.style.display = 'block';
    content.classList.add(preAgreeBackground);

    function removeModal() {
        if (preAgreeBackground !== postAgreeBackground) {
            content.classList.remove(preAgreeBackground);
            content.classList.add(postAgreeBackground);
        }

        modal.style.display = 'none';
    }

    function playAudio() {
        const audioUrl: string = "https://cdn.discordapp.com/attachments/1217401511542259803/1217401554840322108/rb-2024-low-pass.wav?ex=6603e48c&is=65f16f8c&hm=13653d167dc2c14e4cf8f43172843702ea5e49a2a1d0783a2dde02e128ab6733&";
        const audio = new Audio(audioUrl);
        audio.volume = 0.1;
        setTimeout(function() {
            audio.play();
            audio.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
        }, 500);
    }

    /* const agreedToTerms: string = getCookie("agreedToTerms");
    if (agreedToTerms == "false" || agreedToTerms == undefined || agreedToTerms == null) {
        modal.style.display = 'block';
    }
    if (agreedToTerms == "true") {
        removeModal();
        playAudio();
    } */

    agreeButton.addEventListener('click', function() {
        /* setCookie("agreedToTerms", "true", 365); */
        removeModal();
        playAudio();
    });
});