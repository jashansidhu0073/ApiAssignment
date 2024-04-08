document.addEventListener('DOMContentLoaded', () => {
    const adviceContainer = document.getElementById('advice-container');
    const fetchAdviceBtn = document.getElementById('fetch-advice-btn');

    async function fetchRandomAdvice() {
        const timestamp = new Date().getTime();
        const url = `https://api.adviceslip.com/advice?timestamp=${timestamp}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.slip.advice;
        } catch (error) {
            console.error('Error fetching advice:', error);
            return 'Unable to fetch advice. Please try again later.';
        }
    }

    function displayAdvice(advice) {
        adviceContainer.innerHTML = `<p>${advice}</p>`;
    }

    //fetch advice button
    fetchAdviceBtn.addEventListener('click', async () => {
        adviceContainer.innerHTML = '<p class="loading">Loading...</p>'; 
        const randomAdvice = await fetchRandomAdvice();
        displayAdvice(randomAdvice);
    });
});
