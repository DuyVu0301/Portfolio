document.addEventListener('DOMContentLoaded', () => {

    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        const mobileLinks = menu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }

    const modal = document.getElementById('blog-modal');
    const modalBody = document.getElementById('modal-body-content');
    const closeModalBtn = document.getElementById('close-modal');
    const modalOverlay = document.getElementById('modal-overlay');



    window.openBlog = function(id) {

        const post = blogDetails[id]; 
        
        if (post && modal && modalBody) {
            modalBody.innerHTML = `
                <div class="space-y-6 animate-fade-in py-2">
                    <div>
                        <span class="text-highlight text-xs font-bold uppercase tracking-widest">Chi tiết bài viết</span>
                        <h2 class="text-3xl font-bold text-white mt-1 mb-2">${post.title}</h2>
                        <div class="flex items-center gap-4 text-sm text-slate-500">
                            <span><i class="far fa-calendar-alt mr-1"></i> ${post.date}</span>
                            <span><i class="far fa-user mr-1"></i> ${post.author}</span>
                        </div>
                    </div>

                    ${post.youtubeId ? `
                    <div class="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-black">
                        <iframe class="absolute inset-0 w-full h-full" 
                            src="https://www.youtube.com/embed/${post.youtubeId}" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                    </div>` : ''}

                    <div class="text-slate-300 leading-relaxed text-lg border-b border-slate-800 pb-6">
                        ${post.content}
                    </div>

                    <div class="bg-slate-800/80 p-6 rounded-xl border-l-4 border-highlight italic text-slate-200 shadow-inner">
                        <i class="fas fa-quote-left text-highlight text-2xl mb-2 block"></i>
                        <p class="pl-2">${post.personalShare}</p>
                    </div>

                    ${post.codeExample ? `
                    <div class="mt-8">
                        <h4 class="text-white font-bold mb-3 flex items-center gap-2">
                            <i class="fas fa-code text-highlight"></i> Ví dụ minh họa:
                        </h4>
                        <div class="bg-[#0d1117] rounded-lg border border-slate-700 overflow-hidden shadow-2xl">
                            <div class="bg-slate-800 px-4 py-2 flex gap-2 border-b border-slate-700">
                                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <pre class="p-5 overflow-x-auto text-sm text-cyan-400 font-mono leading-6"><code>${post.codeExample}</code></pre>
                        </div>
                    </div>` : ''}
                </div>
            `;

  
            modal.classList.remove('hidden');

            document.body.style.overflow = 'hidden';
        }
    };


    const closeBlogModal = () => {
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto'; 

            modalBody.innerHTML = '';
        }
    };


    if (closeModalBtn) closeModalBtn.addEventListener('click', closeBlogModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeBlogModal);


    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeBlogModal();
    });
});

window.openImageModal = function(imageSrc) {
    const modal = document.getElementById('blog-modal');
    const modalBody = document.getElementById('modal-body-content');
    
    if (modal && modalBody) {

        modalBody.innerHTML = `
            <div class="flex flex-col items-center animate-fade-in">
                <img src="${imageSrc}" class="w-full h-auto rounded-lg shadow-2xl border border-slate-700" alt="Certificate Full">
                <div class="mt-4 text-slate-400 italic text-sm">
                    <i class="fas fa-info-circle mr-1"></i> Nhấp ra ngoài hoặc bấm dấu X để đóng
                </div>
            </div>
        `;
        

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
};