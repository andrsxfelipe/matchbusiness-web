// import starIcon from '.././star.png';

export function homeView() {
    const view = `
    <div class="text-center py-14 bg-[#f6fcf9]">
        <!-- Texto superior con estrellita -->
        <div class="flex justify-center mb-8">
            <div
            class="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 flex items-center gap-2">
            <svg class="w-3 h-3" viewBox="0 0 10 10" fill="none"><path d="M5.168 1.129a.232.232 0 0 1 .416 0l1.01 2.047a.93.93 0 0 0 .698.508l2.26.33a.232.232 0 0 1 .129.396L8.046 6a.93.93 0 0 0-.267.822l.386 2.249a.232.232 0 0 1-.337.245l-2.02-1.062a.93.93 0 0 0-.864 0l-2.02 1.062a.232.232 0 0 1-.337-.245l.386-2.248A.93.93 0 0 0 2.705 6L1.071 4.41a.232.232 0 0 1 .128-.397l2.26-.33a.93.93 0 0 0 .699-.508z" stroke="#1C75BC" stroke-linecap="round" stroke-linejoin="round" stroke-width=".875"/></svg>
            <span class="text-blue-600 text-xs font-medium">
                Powered by Innovation</span>
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
                <svg class="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path d="M8 29.333v-24a2.667 2.667 0 0 1 2.667-2.666h10.666A2.667 2.667 0 0 1 24 5.333v24zM8 16H5.333a2.667 2.667 0 0 0-2.666 2.667v8a2.667 2.667 0 0 0 2.666 2.666H8M24 12h2.667a2.667 2.667 0 0 1 2.666 2.667v12a2.667 2.667 0 0 1-2.666 2.666H24M13.333 8h5.334m-5.334 5.333h5.334m-5.334 5.334h5.334M13.333 24h5.334" stroke="#1C75BC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667"/>
                </svg>
                <p class="font-bold text-[#222] text-lg">For companies</p>
                <p class="text-[#555] text-base">
                    Find talented developers to solve your business <br> challenges
                </p>
            </div>

            <!-- Logo central -->
            <svg class="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <path d="M20 38c9.941 0 18-8.059 18-18S29.941 2 20 2 2 10.059 2 20s8.059 18 18 18" fill="url(#a)" opacity=".1"/>
                <path d="M12 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8" fill="url(#b)"/>
                <path d="M28 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8" fill="url(#c)"/>
                <path d="M16 15h8" stroke="url(#paint3_linear_1_771)" stroke-linecap="round" stroke-width="2"/>
                <path d="m16 22 4 4 4-4" stroke="url(#d)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                <path d="M8 29.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" fill="url(#e)" opacity=".6"/>
                <path d="M14 33.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" fill="url(#f)" opacity=".6"/>
                <path d="M26 33.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" fill="url(#g)" opacity=".6"/>
                <path d="M32 29.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" fill="url(#h)" opacity=".6"/>
                <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="a" x1="2" x2="3602" y1="2" y2="3602">
                    <stop stop-color="#1C75BC"/>
                    <stop offset="1" stop-color="#3B8FD6"/>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="b" x1="8" x2="808" y1="11" y2="811">
                    <stop stop-color="#1C75BC"/>
                    <stop offset="1" stop-color="#3B8FD6"/>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="c" x1="24" x2="824" y1="11" y2="811">
                    <stop stop-color="#78BE20"/>
                    <stop offset="1" stop-color="#89D426"/>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="d" x1="16" x2="336" y1="22" y2="662">
                    <stop stop-color="#78BE20"/>
                    <stop offset="1" stop-color="#89D426"/>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="e" x1="6.5" x2="306.5" y1="26.5" y2="326.5">
                    <stop stop-color="#1C75BC"/>
                    <stop offset="1" stop-color="#3B8FD6"/>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="f" x1="12.5" x2="312.5" y1="30.5" y2="330.5">
                    <stop stop-color="#78BE20"/>
                    <stop offset="1" stop-color="#89D426"/>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="g" x1="24.5" x2="324.5" y1="30.5" y2="330.5">
                    <stop stop-color="#1C75BC"/>
                    <stop offset="1" stop-color="#3B8FD6"/>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="h" x1="30.5" x2="330.5" y1="26.5" y2="326.5">
                    <stop stop-color="#78BE20"/>
                    <stop offset="1" stop-color="#89D426"/>
                    </linearGradient>
                </defs>
                </svg>

            <!-- Bloque coder -->
            <div
                class="bg-white rounded-[18px] shadow-[0_4px_24px_0_rgba(126,203,156,0.08)] p-8 w-64 text-center flex flex-col items-center gap-2">
                <svg class="w-8 h-8" viewBox="0 0 32 32" fill="none"><path d="m21.333 24 8-8-8-8M10.667 8l-8 8 8 8" stroke="#78BE20" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667"/></svg>
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
                <svg class="w-8 h-8" viewBox="0 0 32 32" fill="none">
  <path d="m28 28-5.787-5.787m-7.546 3.12c5.89 0 10.666-4.775 10.666-10.666S20.558 4 14.667 4 4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666" stroke="#1C75BC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667"/>
</svg>
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
                <svg class="w-8 h-8" viewBox="0 0 32 32" fill="none"><path d="M20 18.667c.267-1.334.933-2.267 2-3.334 1.333-1.2 2-2.933 2-4.666a8 8 0 0 0-16 0c0 1.333.267 2.933 2 4.666.933.934 1.733 2 2 3.334M12 24h8m-6.667 5.333h5.334" stroke="#78BE20" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667"/></svg>
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
                <svg class="w-8 h-8" viewBox="0 0 32 32" fill="none"><path d="M2.667 12.667a7.333 7.333 0 0 1 12.788-4.902.746.746 0 0 0 1.09 0 7.32 7.32 0 0 1 12.788 4.902c0 3.053-2 5.333-4 7.333l-7.322 7.084a2.668 2.668 0 0 1-4 .025L6.667 20c-2-2-4-4.267-4-7.333" stroke="#1C75BC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.667"/></svg>
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