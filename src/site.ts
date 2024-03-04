document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('agreementModal') as HTMLElement;
    const agreeButton = document.getElementById('agreeButton') as HTMLElement;
    const content = document.getElementById('content') as HTMLElement;

    const preAgreeBackground: string = "qm-breathing";
    const postAgreeBackground: string = "qm-breathing";

    content.classList.add(preAgreeBackground);

    modal.style.display = 'block';

    agreeButton.addEventListener('click', function() {
        if (preAgreeBackground !== postAgreeBackground) {
            content.classList.remove(preAgreeBackground);
            content.classList.add(postAgreeBackground);
        }

        modal.style.display = 'none';

        const audioUrl: string = "https://cdn.discordapp.com/attachments/1213958929894346823/1213971035209212005/rb-2024-low-pass.wav?ex=65f769a1&is=65e4f4a1&hm=17e577a6e92742bd97f62eb41a9458ae6c8e6624973c255b683c792f577c0cda&";
        const audio = new Audio(audioUrl);
        audio.volume = 0.1;
        setTimeout(function() {
            audio.play();
            audio.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
        }, 500);
    });
});