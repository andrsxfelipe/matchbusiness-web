// import starIcon from '.././star.png';

export function homeView() {
    const view = `
    <div class="text-center py-14 bg-[#f6fcf9]">
        <!-- Texto superior con estrellita -->
        <div class="flex justify-center mb-8">
            <div
            class="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 flex items-center gap-2"
            >
            <svg class="w-3 h-3" viewBox="0 0 10 10" fill="none">
                <path
                d="M5.16797 1.12902C5.18715 1.09028 5.21677 1.05767 5.25349 1.03488C5.29021 1.01208 5.33257 1 5.37579 1C5.41901 1 5.46137 1.01208 5.49809 1.03488C5.53481 1.05767 5.56443 1.09028 5.5836 1.12902L6.59422 3.17608C6.6608 3.31081 6.75908 3.42738 6.88062 3.51578C7.00217 3.60417 7.14334 3.66175 7.29204 3.68358L9.55216 4.01433C9.59499 4.02053 9.63522 4.0386 9.66831 4.06648C9.70141 4.09436 9.72604 4.13094 9.73942 4.17209C9.7528 4.21324 9.75441 4.25732 9.74404 4.29933C9.73368 4.34134 9.71177 4.37962 9.68079 4.40983L8.04629 6.00145C7.93849 6.1065 7.85784 6.23616 7.81128 6.37929C7.76471 6.52242 7.75363 6.67472 7.77897 6.82308L8.16485 9.07183C8.17241 9.11463 8.16779 9.1587 8.15151 9.199C8.13523 9.23931 8.10794 9.27422 8.07278 9.29976C8.03761 9.32531 7.99597 9.34045 7.9526 9.34347C7.90924 9.34649 7.8659 9.33726 7.82754 9.31683L5.80716 8.25458C5.67404 8.18468 5.52593 8.14816 5.37557 8.14816C5.22521 8.14816 5.0771 8.18468 4.94397 8.25458L2.92404 9.31683C2.88568 9.33713 2.8424 9.34627 2.79911 9.34319C2.75582 9.34011 2.71426 9.32495 2.67917 9.29942C2.64407 9.2739 2.61684 9.23904 2.60057 9.1988C2.58431 9.15857 2.57966 9.11457 2.58716 9.07183L2.9726 6.82352C2.99806 6.67509 2.98703 6.52269 2.94046 6.37947C2.89389 6.23626 2.81318 6.10652 2.70529 6.00145L1.07079 4.41027C1.03955 4.38009 1.01741 4.34175 1.0069 4.29961C0.996382 4.25747 0.997916 4.21322 1.01132 4.17191C1.02473 4.1306 1.04947 4.09388 1.08272 4.06595C1.11598 4.03801 1.15641 4.01997 1.19941 4.01389L3.4591 3.68358C3.60796 3.66192 3.74933 3.60442 3.87104 3.51601C3.99275 3.4276 4.09116 3.31095 4.15779 3.17608L5.16797 1.12902Z"
                stroke="#1C75BC"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0.875"
                />
            </svg>
            <span class="text-blue-600 text-xs font-medium"
                >Powered by Innovation</span
            >
            </div>
        </div>

        <!-- Título -->
        <h1 class="text-[2.7rem] font-extrabold text-[#222] tracking-[-1px] mb-5">
            Connecting Coders & Companies <br> through Innovation
        </h1>

        <!-- Subtítulo -->
        <p class="text-[#555] text-lg mb-8">
            Join the largest network of developers and innovative companies. Showcase <br>
            your skills, solve real challenges, and build the future together.
        </p>

        <!-- Bloques de match -->
        <div class="flex justify-center items-center gap-12 mt-8 flex-col md:flex-row">

            <!-- Bloque company -->
            <div
                class="bg-white rounded-[18px] shadow-[0_4px_24px_0_rgba(126,203,156,0.08)] p-8 w-64 text-center flex flex-col items-center gap-2">
                <img src="/companie.png" alt="companie" class="w-14 h-14 mb-2">
                <p class="font-bold text-[#222] text-lg">For companies</p>
                <p class="text-[#555] text-base">
                    Find talented developers to solve your business <br> challenges
                </p>
            </div>

            <!-- Logo central -->
            <img src="/logoBig.png" alt="logo" class="w-20 h-20">

            <!-- Bloque coder -->
            <div
                class="bg-white rounded-[18px] shadow-[0_4px_24px_0_rgba(126,203,156,0.08)] p-8 w-64 text-center flex flex-col items-center gap-2">
                <img src="/coder.png" alt="coder" class="w-14 h-14 mb-2">
                <p class="font-bold text-[#222] text-lg">For coders</p>
                <p class="text-[#555] text-base">
                    Showcase your skills and work on exciting real-world <br> projects
                </p>
            </div>

        </div>
    </div>

    <div class="home2 flex flex-wrap justify-center gap-12 py-16 bg-[#f6fcf9] text-center">

        <div class="statis">
            <h1 class="text-4xl font-extrabold text-[#222]">500+</h1>
            <p class="text-lg text-[#555]">Active Coders</p>
        </div>

        <div class="statis">
            <h1 class="text-4xl font-extrabold text-[#222]">50+</h1>
            <p class="text-lg text-[#555]">Companies</p>
        </div>

        <div class="statis">
            <h1 class="text-4xl font-extrabold text-[#222]">1000+</h1>
            <p class="text-lg text-[#555]">Successful Matches</p>
        </div>

        <div class="statis">
            <h1 class="text-4xl font-extrabold text-[#222]">95%</h1>
            <p class="text-lg text-[#555]">Satisfaction Rate</p>
        </div>

    </div>

    <div class="home3 py-20 bg-white text-center">

        <!-- Título principal -->
        <h1 class="text-3xl font-extrabold text-[#222] mb-4">How It Works</h1>
        <p class="text-lg text-[#555] mb-12">
            Three simple steps to connect with the right opportunities
        </p>

        <!-- Contenedor de cards -->
        <div class="flex flex-wrap justify-center gap-10">

            <!-- Card 1 -->
            <div class="cardIdea max-w-xs bg-[#f9f9f9] rounded-xl shadow-md p-6">
                <img src="/lupa.png" alt="" class="mx-auto mb-4 w-16 h-16">
                <p class="text-blue-500 font-bold text-xl">1</p>
                <h2 class="text-xl font-semibold text-[#222] mt-2 mb-3">Explore Companies</h2>
                <p class="text-[#555]">
                    Browse through our network of innovative <br>
                    companies and discover exciting <br>
                    challenges that match your skills.
                </p>
            </div>

            <!-- Card 2 -->
            <div class="cardIdea max-w-xs bg-[#f9f9f9] rounded-xl shadow-md p-6">
                <img src="/led.png" alt="" class="mx-auto mb-4 w-16 h-16">
                <p class="text-blue-500 font-bold text-xl">2</p>
                <h2 class="text-xl font-semibold text-[#222] mt-2 mb-3">Propose your ideas</h2>
                <p class="text-[#555]">
                    Submit your innovative solutions and <br>
                    demonstrate how you can solve real <br>
                    business problems.
                </p>
            </div>

            <!-- Card 3 -->
            <div class="cardIdea max-w-xs bg-[#f9f9f9] rounded-xl shadow-md p-6">
                <img src="/corazon.png" alt="" class="mx-auto mb-4 w-16 h-16">
                <p class="text-blue-500 font-bold text-xl">3</p>
                <h2 class="text-xl font-semibold text-[#222] mt-2 mb-3">Make a Match</h2>
                <p class="text-[#555]">
                    Get connected with companies that value <br>
                    your skills and start building amazing <br>
                    projects together.
                </p>
            </div>

        </div>
    </div>

    <div class="home4 bg-[#f6fcf9] py-16 text-center">

        <!-- Título -->
        <h1 class="text-[2.1rem] font-extrabold text-[#222] mb-2">Partner Companies</h1>
        <p class="text-[#555] text-lg mb-8">
            Join innovative companies that are already part of our ecosystem
        </p>

        <!-- Logos -->
        <div class="partner-logos flex justify-center gap-8 flex-wrap mb-8">
            <div class="partner-logo bg-white rounded-[18px] shadow-md p-4 w-[120px] flex flex-col items-center gap-2">
                <img src="/smart-fit-logo.png" alt="smart-fit-logo" class="w-16 h-16 object-contain">
            </div>
            <div class="partner-logo bg-white rounded-[18px] shadow-md p-4 w-[120px] flex flex-col items-center gap-2">
                <img src="/postobon-logo.png" alt="postobon-logo" class="w-16 h-16 object-contain">
            </div>
            <div class="partner-logo bg-white rounded-[18px] shadow-md p-4 w-[120px] flex flex-col items-center gap-2">
                <img src="/nequi-logo.png" alt="nequi-logo" class="w-16 h-16 object-contain">
            </div>
            <div class="partner-logo bg-white rounded-[18px] shadow-md p-4 w-[120px] flex flex-col items-center gap-2">
                <img src="/BlackBird-logo.jpg" alt="BlackBird-logo" class="w-16 h-16 object-contain">
            </div>
            <div class="partner-logo bg-white rounded-[18px] shadow-md p-4 w-[120px] flex flex-col items-center gap-2">
                <img src="/auteco-logo.png" alt="auteco-logo" class="w-16 h-16 object-contain">
            </div>
            <div class="partner-logo bg-white rounded-[18px] shadow-md p-4 w-[120px] flex flex-col items-center gap-2">
                <img src="/sistecredito-logo.png" alt="sistecredito-logo" class="w-16 h-16 object-contain">
            </div>
        </div>

        <!-- Call to action -->
        <div class="mt-10">
            <h1 class="text-2xl font-extrabold text-[#222] mb-2">Ready to Start Matching?</h1>
            <p class="text-[#7ecb9c] text-xl font-bold flex items-center justify-center gap-2">
                <img src="/star.png" alt="start" class="w-6 h-6"> Start matching
            </p>
        </div>
    </div>
    `
    return view;
}