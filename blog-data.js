const blogDetails = {
    1: {
        title: "JavaScript ES6+: Những tính năng phải biết",
        date: "26/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "rhi5bNOCiVo", 
        personalShare: `
            <div class="space-y-8 text-gray-100 leading-relaxed text-justify">
                <h3 class="text-3xl font-extrabold text-yellow-300 border-b-2 border-yellow-500/50 pb-4 uppercase tracking-wider">
                    Chương I: Cuộc Di Cư Vĩ Đại Từ ES5 Sang ES6+
                </h3>
                
                <section>
                    <h4 class="text-xl font-bold text-blue-300 mb-3 flex items-center">
                        <span class="bg-blue-500 text-black px-2 py-1 rounded mr-2">01</span> Nỗi Ám Ảnh Mang Tên "Var"
                    </h4>
                    <p>
                        Hãy quay ngược thời gian về những ngày đầu mình làm quen với JavaScript. Lúc đó, khái niệm <strong>Hoisting</strong> và <strong>Global Scope</strong> của biến <code>var</code> là một cơn ác mộng thực sự. Mình từng dành cả một đêm chỉ để tìm một cái bug "vô hình": một biến trong vòng lặp <code>for</code> vô tình ghi đè lên biến toàn cục khiến toàn bộ logic ứng dụng sụp đổ. 
                    </p>
                    <p class="mt-2">
                        Khi ES6 ra đời với <code>let</code> và <code>const</code>, nó không chỉ là thêm từ khóa mới, mà là sự cứu rỗi về mặt tư duy. Nó ép lập trình viên phải có trách nhiệm hơn với phạm vi của biến, giúp code trở nên "đoán trước được" (predictable).
                    </p>
                </section>

                <div class="bg-white/5 p-6 rounded-2xl border border-white/10 my-6">
                    <h4 class="text-lg font-bold text-green-400 mb-3 underline">Phân tích kỹ thuật: Sức mạnh của sự tinh gọn</h4>
                    <p class="text-sm italic">
                        Bạn đã bao giờ phải cộng 5-6 biến vào một chuỗi HTML dài dằng dặc chưa? Với cách cũ, bạn sẽ lạc giữa "rừng" dấu cộng (+) và dấu nháy đơn. <strong>Template Literals</strong> đã thay đổi hoàn toàn điều đó. Kết hợp với <strong>Destructuring</strong>, mình có thể trích xuất dữ liệu từ Object API chỉ trong một dòng thay vì phải viết 5 dòng gán giá trị thủ công.
                    </p>
                </div>

                <section>
                    <h4 class="text-xl font-bold text-blue-300 mb-3 flex items-center">
                        <span class="bg-blue-500 text-black px-2 py-1 rounded mr-2">02</span> Arrow Functions & Sự Thay Đổi Của "This"
                    </h4>
                    <p>
                        Nếu ai đã từng đau đầu với việc <code>.bind(this)</code> hoặc tạo biến <code>let self = this;</code> thì sẽ hiểu <strong>Arrow Function</strong> vĩ đại thế nào. Nó không chỉ làm code ngắn đi mà còn giải quyết triệt để vấn đề ngữ cảnh (context) trong JavaScript. 
                    </p>
                </section>

                <div class="p-6 bg-yellow-900/20 border-l-8 border-yellow-500 rounded-lg shadow-2xl">
                    <h4 class="font-bold text-yellow-300 mb-2">Lời kết cho những người bắt đầu:</h4>
                    <p>
                        Học ES6+ là học cách viết code cho con người đọc, không phải cho máy chạy. Trong dự án Portfolio này, mình đã áp dụng 100% cú pháp mới nhất để đảm bảo hiệu năng tối ưu và khả năng bảo trì lâu dài. Đừng bao giờ dừng lại ở việc biết dùng, hãy học cách hiểu tại sao nó ra đời.
                    </p>
                </div>
            </div>
        `,
        codeExample: `// Modern JavaScript Clean Code\nconst user = { id: 1, name: 'Duy Vũ', role: 'Dev' };\nconst { name, role } = user; \nconst greet = () => \`Chào \${name}, chức vụ: \${role}\`;\nconsole.log(greet());`,
        content: "ES6 (2015) mang đến những thay đổi nền tảng cho JS như Class, Modules, Promise giúp xử lý bất đồng bộ mượt mà hơn."
    },

    2: {
        title: "Java OOP: 4 tính chất quan trọng",
        date: "25/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "qwPvkhemvHA",
        personalShare: `
            <div class="space-y-8 text-gray-100 leading-relaxed text-justify">
                <h3 class="text-3xl font-extrabold text-blue-300 border-b-2 border-blue-500/50 pb-4 uppercase">
                    Chương II: OOP - Khi Lập Trình Gặp Gỡ Triết Học
                </h3>

                <section>
                    <h4 class="text-xl font-bold text-yellow-300 mb-3">1. Tính Đóng Gói: Bức Tường Bảo Vệ Dữ Liệu</h4>
                    <p>
                        Hồi mới học Java, mình thường thắc mắc: "Tại sao phải để private rồi viết Getter/Setter cho mệt?". Cho đến một lần mình làm đồ án nhóm, một bạn trong nhóm đã vô tình sửa trực tiếp biến <code>balance</code> của tài khoản khiến số dư bị âm mà không qua bước kiểm tra nào. Lúc đó mình mới "thấm" tính <strong>Encapsulation</strong>. Nó không phải là làm khó nhau, mà là tạo ra một "giao diện an toàn" để tương tác với đối tượng.
                    </p>
                </section>

                <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-5 bg-white/5 rounded-xl border border-blue-500/30">
                        <h5 class="font-bold text-blue-400 mb-2 underline">Tính Kế Thừa (Inheritance)</h5>
                        <p class="text-sm">Đừng phát minh lại cái bánh xe! Kế thừa giúp mình xây dựng những hệ thống phân cấp logic. Tuy nhiên, đừng lạm dụng nó quá đà kẻo rơi vào cái bẫy "Fragile Base Class" - sửa một chỗ ở cha là hỏng sạch các con.</p>
                    </div>
                    <div class="p-5 bg-white/5 rounded-xl border border-green-500/30">
                        <h5 class="font-bold text-green-400 mb-2 underline">Tính Đa Hình (Polymorphism)</h5>
                        <p class="text-sm">Đây là tính chất "ma thuật" nhất. Nó cho phép một danh sách <code>List&lt;Animal&gt;</code> chứa cả Chó, Mèo và khi gọi <code>speak()</code>, mỗi con sẽ tự biết phát ra tiếng kêu riêng. Nó giúp code cực kỳ linh hoạt.</p>
                    </div>
                </section>

                <section>
                    <h4 class="text-xl font-bold text-yellow-300 mb-3 text-center italic">"Trừu Tượng Hóa: Nhìn Thấy Bản Chất Trong Sự Phức Tạp"</h4>
                    <p>
                        Tính <strong>Abstraction</strong> dạy mình cách tập trung vào "Cái gì" (What) thay vì "Như thế nào" (How). Khi bạn thiết kế một Interface cho Database, bạn không quan tâm nó là SQL hay NoSQL, bạn chỉ quan tâm đến việc lưu dữ liệu. Đó là tầm cao của tư duy thiết kế hệ thống.
                    </p>
                </section>

                <div class="p-6 bg-blue-900/40 rounded-3xl border-2 border-dashed border-blue-400">
                    <h4 class="font-bold text-center text-xl mb-4">Bài học cho tương lai:</h4>
                    <p>
                        Học OOP không phải là học cú pháp Java, mà là học cách tổ chức thế giới hỗn độn thành những khối logic có thể quản lý được. Một lập trình viên giỏi không phải là người viết được class phức tạp nhất, mà là người thiết kế được hệ thống đơn giản và dễ hiểu nhất dựa trên 4 trụ cột này.
                    </p>
                </div>
            </div>
        `,
        codeExample: `// Đa hình thực tế trong Java\nAnimal myDog = new Dog();\nmyDog.makeSound(); // Woof!\nAnimal myCat = new Cat();\nmyCat.makeSound(); // Meow!`,
        content: "OOP bao gồm: Đóng gói, Kế thừa, Đa hình và Trừu tượng. Đây là nền tảng cốt lõi của Java."
    },

    3: {
        title: "Xử lý bất đồng bộ trong JS",
        date: "24/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "XYVJKnZc0SY",
        personalShare: `
            <div class="space-y-8 text-gray-100 leading-relaxed text-justify">
                <h3 class="text-3xl font-extrabold text-red-400 border-b-2 border-red-500/50 pb-4 uppercase">
                    Chương III: Bất Đồng Bộ - Khi JavaScript Không Chờ Đợi Ai
                </h3>

                <section>
                    <h4 class="text-xl font-bold text-red-300 mb-3 italic">Bản Chất Của Sự Hỗn Loạn</h4>
                    <p>
                        Bạn đã bao giờ gọi API rồi nhận về <code>undefined</code> mặc dù trên mạng vẫn thấy dữ liệu chưa? Đó là vấp ngã đầu tiên của mình với bất đồng bộ. JavaScript là ngôn ngữ chạy đơn luồng (Single-threaded), nó không dừng lại chờ mạng load xong mà sẽ chạy tiếp. Nếu không hiểu điều này, bạn sẽ mãi lạc lối trong những giá trị <code>null</code>.
                    </p>
                </section>

                <div class="flex flex-col gap-6">
                    <div class="p-5 bg-red-900/10 border-l-4 border-red-500 rounded shadow-md">
                        <h5 class="font-bold text-lg mb-2 text-red-400">Giai đoạn 1: Callback Hell</h5>
                        <p class="text-sm">Ngày xưa, để thực hiện 3 tác vụ liên tiếp, chúng ta phải lồng 3 hàm vào nhau. Code trông giống như một cái "kim tự tháp" đổ nghiêng. Cực kỳ khó đọc, cực kỳ khó debug. Đó là thời kỳ đen tối của JS.</p>
                    </div>
                    <div class="p-5 bg-orange-900/10 border-l-4 border-orange-500 rounded shadow-md">
                        <h5 class="font-bold text-lg mb-2 text-orange-400">Giai đoạn 2: Promise</h5>
                        <p class="text-sm">Promise ra đời giúp code "phẳng" hơn với <code>.then()</code> và <code>.catch()</code>. Nó tốt hơn, nhưng đôi khi vẫn còn khá rườm rà khi xử lý nhiều logic phức tạp lồng nhau.</p>
                    </div>
                    <div class="p-5 bg-green-900/10 border-l-4 border-green-500 rounded shadow-md">
                        <h5 class="font-bold text-lg mb-2 text-green-400">Giai đoạn 3: Async/Await (Cảnh giới tối cao)</h5>
                        <p class="text-sm">Đây là lý do mình yêu thích JS hiện đại. Async/Await cho phép chúng ta viết mã bất đồng bộ nhưng trông giống hệt mã đồng bộ. Nó giúp tư duy logic của chúng ta không bị ngắt quãng.</p>
                    </div>
                </div>

                <section>
                    <h4 class="text-xl font-bold text-yellow-300 mb-3 underline">Chiến thuật Error Handling</h4>
                    <p>
                        Kinh nghiệm xương máu của mình: Đừng bao giờ tin tưởng vào mạng hay server. Một ứng dụng tốt là ứng dụng biết cách thông báo lỗi một cách văn minh. Việc bọc toàn bộ code trong <code>try-catch</code> khi dùng Async/Await không chỉ là kỹ thuật, đó là đạo đức nghề nghiệp để bảo vệ trải nghiệm người dùng.
                    </p>
                </section>

                <blockquote class="p-6 italic bg-white/5 border-t-2 border-b-2 border-red-400 text-center text-lg font-light text-red-200">
                    "Trong lập trình bất đồng bộ, sai lầm lớn nhất không phải là code lỗi, mà là code chạy mà bạn không biết nó sẽ kết thúc lúc nào."
                </blockquote>
            </div>
        `,
        codeExample: `// Đỉnh cao của xử lý bất đồng bộ\nasync function loadData() {\n    try {\n        const res = await fetch('https://api.me.com/data');\n        if (!res.ok) throw new Error("Server lỗi rồi!");\n        const data = await res.json();\n        render(data);\n    } catch (err) {\n        showErrorToUser(err.message);\n    }\n}`,
        content: "Cơ chế Event Loop giúp JS xử lý các tác vụ nặng mà không treo trình duyệt. Async/Await là cú pháp hiện đại và an toàn nhất."
    },

    4: {
        title: "DOM Manipulation cơ bản đến nâng cao",
        date: "23/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "8tTAI8dqoNQ",
        personalShare: `
            <div class="space-y-8 text-gray-100 leading-relaxed text-justify">
                <h3 class="text-3xl font-extrabold text-teal-400 border-b-2 border-teal-500/50 pb-4 uppercase tracking-tighter">
                    Chương IV: DOM - Cây Sự Sống Của Trang Web
                </h3>

                <section>
                    <h4 class="text-xl font-bold text-yellow-200 mb-3">Sự Thật Về Các Framework Hiện Đại</h4>
                    <p>
                        Hiện nay ai cũng học React, Vue, Angular ngay từ đầu. Nhưng mình chọn đi ngược lại: Đào thật sâu vào <strong>Vanilla JS DOM</strong>. Tại sao? Vì Framework chỉ là cái ngọn, DOM mới là cái gốc. Nếu bạn hiểu cách trình duyệt xây dựng cây DOM, cách nó tính toán Layout và Repaint, bạn sẽ viết được những trang web mượt mà mà không cần đến hàng MB thư viện nặng nề.
                    </p>
                </section>

                <div class="bg-teal-900/20 p-6 rounded-3xl border border-teal-400/30">
                    <h5 class="text-lg font-bold text-teal-300 mb-4 text-center underline">Bài học thực chiến từ dự án Portfolio</h5>
                    <p>
                        Toàn bộ các hiệu ứng chuyển trang, sương mù động và việc render các bài blog này đều được mình xử lý qua DOM Manipulation thuần. Việc trực tiếp lắng nghe các <strong>Event Bubbling</strong> và xử lý <strong>Delegation</strong> giúp trang web của mình phản hồi cực nhanh. Mình đã học được rằng: <em>"Tối ưu hóa hiệu năng bắt đầu từ việc hiểu trình duyệt đang làm gì với các thẻ HTML của bạn."</em>
                    </p>
                </div>

                <section>
                    <h4 class="text-xl font-bold text-yellow-200 mb-3">Tư duy về UX/UI qua Code</h4>
                    <p>
                        DOM không chỉ là thêm/xóa phần tử. Đó là nghệ thuật tương tác. Cách bạn điều khiển một cái Modal xuất hiện, cách bạn xử lý hiệu ứng trượt... tất cả đều nằm ở kỹ năng điều khiển các Node. Đừng chỉ thay đổi style, hãy thay đổi cách người dùng cảm nhận trang web thông qua từng dòng <code>document.querySelector</code>.
                    </p>
                </section>
                
                <p class="text-center font-bold text-teal-400 text-xl border-y border-teal-800 py-4 italic shadow-sm">
                    "Framework sẽ lỗi thời, nhưng hiểu biết về DOM thuần là kiến thức vĩnh cửu."
                </p>
            </div>
        `,
        codeExample: `// Tối ưu hóa Event với Delegation\ndocument.querySelector('#list').addEventListener('click', (e) => {\n    if(e.target.tagName === 'LI') {\n        console.log("Bạn vừa click vào: " + e.target.innerText);\n    }\n});`,
        content: "DOM là giao diện kết nối JavaScript với HTML. Làm chủ DOM giúp bạn tạo ra các hiệu ứng tương tác mạnh mẽ."
    },

    5: {
        title: "Kết nối Database với JDBC trong Java",
        date: "22/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "5Nwk8rCLv7Y",
        personalShare: `
            <div class="space-y-8 text-gray-100 leading-relaxed text-justify">
                <h3 class="text-3xl font-extrabold text-orange-400 border-b-2 border-orange-500/50 pb-4 uppercase">
                    Chương V: JDBC - Cây Cầu Kết Nối Giữa Code Và Dữ Liệu
                </h3>

                <section>
                    <h4 class="text-xl font-bold text-orange-200 mb-3 flex items-center">
                        🛑 Bài Học Xương Máu: SQL Injection
                    </h4>
                    <p>
                        Trong những bài tập đầu tiên, mình đã phạm một sai lầm chết người: Cộng trực tiếp chuỗi từ Input của người dùng vào câu SQL. Thầy giáo mình đã demo chỉ với một dấu nháy đơn <code>'</code> và lệnh <code>OR 1=1</code>, toàn bộ mật khẩu trong DB đã hiện ra. Đó là giây phút mình bừng tỉnh về tầm quan trọng của <strong>PreparedStatement</strong>. Trong JDBC, an ninh dữ liệu phải đặt lên hàng đầu.
                    </p>
                </section>

                <div class="bg-black/40 p-6 rounded-xl border border-orange-800 shadow-2xl">
                    <h5 class="text-orange-400 font-bold mb-3 underline">Quy trình 7 bước chuẩn mực:</h5>
                    <ol class="list-decimal ml-6 space-y-2 text-sm">
                        <li>Nạp Driver (Hiện tại thường tự động nhưng vẫn cần hiểu bản chất).</li>
                        <li>Thiết lập Connection (Luôn bọc trong try-with-resources để tránh leak bộ nhớ).</li>
                        <li>Tạo Statement/PreparedStatement.</li>
                        <li>Thực thi Query.</li>
                        <li>Xử lý ResultSet (Cẩn thận với con trỏ dữ liệu).</li>
                        <li>Đóng kết nối (Crucial step!).</li>
                        <li>Xử lý ngoại lệ SQLException.</li>
                    </ol>
                </div>

                <section>
                    <h4 class="text-xl font-bold text-orange-200 mb-3 italic underline">Triết lý về Persistence:</h4>
                    <p>
                        Code có thể mất đi khi tắt máy, nhưng dữ liệu phải trường tồn. JDBC dạy mình cách tôn trọng sự toàn vẹn của dữ liệu. Việc quản lý <strong>Transaction</strong> (Commit/Rollback) trong Java giúp mình hiểu làm thế nào các ngân hàng đảm bảo tiền không bị "mất tích" khi đang chuyển giữa hai tài khoản.
                    </p>
                </section>

                <div class="p-6 bg-orange-950/30 border border-orange-400 rounded-lg text-center font-bold italic">
                    "Đừng bao giờ tin tưởng dữ liệu từ người dùng. Hãy luôn bọc chúng trong lớp giáp của PreparedStatement trước khi đưa vào trái tim của hệ thống."
                </div>
            </div>
        `,
        codeExample: `// Kết nối an toàn với PreparedStatement\ntry (Connection conn = DBUtils.getConnection()) {\n    String sql = "SELECT * FROM users WHERE username = ?";\n    PreparedStatement ps = conn.prepareStatement(sql);\n    ps.setString(1, inputName);\n    ResultSet rs = ps.executeQuery();\n    // Xử lý dữ liệu...\n}`,
        content: "JDBC là thư viện chuẩn của Java để làm việc với CSDL. Nó cung cấp các phương thức để thực thi SQL và lấy kết quả."
    },

    6: {
        title: "Regex trong JavaScript: Xử lý chuỗi",
        date: "21/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "YGpWSC8Kxvk",
        personalShare: `
            <div class="space-y-8 text-gray-100 leading-relaxed text-justify">
                <h3 class="text-3xl font-extrabold text-pink-400 border-b-2 border-pink-500/50 pb-4 uppercase tracking-widest">
                    Chương VI: Regex - Mật Mã Của Những Phù Thủy Chuỗi
                </h3>

                <section>
                    <h4 class="text-xl font-bold text-pink-300 mb-3">Tình Yêu Và Thù Hận Với Những Ký Tự Lạ</h4>
                    <p>
                        Lần đầu nhìn thấy một chuỗi Regex như <code>/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/</code>, mình đã thốt lên: "Cái quái gì thế này?". Nó trông giống một chuỗi ký tự lỗi hơn là code lập trình. Nhưng sau một tuần miệt mài nghiên cứu, mình nhận ra Regex là công cụ mạnh mẽ nhất từng được phát minh để xử lý văn bản.
                    </p>
                </section>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div class="p-4 bg-pink-900/10 border border-pink-500/30 rounded-lg">
                        <h5 class="font-bold text-pink-400 mb-2">Ưu điểm vượt trội</h5>
                        <p class="text-xs">Một dòng Regex có thể thay thế cho 50 dòng <code>if-else</code> phức tạp. Nó giúp validate dữ liệu, bóc tách thông tin từ chuỗi cực kỳ nhanh gọn.</p>
                    </div>
                    <div class="p-4 bg-white/5 border border-pink-500/30 rounded-lg">
                        <h5 class="font-bold text-pink-400 mb-2">Lời khuyên sử dụng</h5>
                        <p class="text-xs">Đừng cố học thuộc lòng! Hãy dùng công cụ hỗ trợ như Regex101. Quan trọng là bạn hiểu tư duy <strong>Pattern Matching</strong> (khớp mẫu).</p>
                    </div>
                </div>

                <section>
                    <h4 class="text-xl font-bold text-yellow-200 mb-3 italic underline">Ứng dụng trong dự án Portfolio:</h4>
                    <p>
                        Trong trang web này, mình đã dùng Regex để kiểm tra định dạng email của người dùng gửi liên hệ. Việc lọc và chuẩn hóa dữ liệu ngay tại Client giúp giảm tải rất nhiều cho Server. Regex không chỉ là kỹ thuật, nó là sự tinh tế trong việc kiểm soát dữ liệu đầu vào.
                    </p>
                </section>

                <p class="p-4 bg-pink-950/20 border-l-4 border-pink-500 italic font-light text-lg">
                    "Một lập trình viên không biết Regex giống như một đầu bếp không biết dùng dao sắc. Bạn vẫn có thể nấu ăn, nhưng sẽ mất rất nhiều thời gian cho những việc cơ bản."
                </p>
            </div>
        `,
        codeExample: `// Kiểm tra số điện thoại Việt Nam\nconst phoneRegex = /^(0|\\+84)(\\d{9})$/;\nconsole.log(phoneRegex.test("0912345678")); // true`,
        content: "Regular Expression là công cụ cực mạnh để tìm kiếm và thay thế chuỗi. Đây là kỹ năng không thể thiếu để validate dữ liệu."
    },

    7: {
        title: "Cấu trúc dữ liệu Array & List trong Java",
        date: "20/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "m4QD2ykLiiw",
        personalShare: `
            <div class="space-y-8 text-gray-100 leading-relaxed text-justify">
                <h3 class="text-3xl font-extrabold text-green-400 border-b-2 border-green-500/50 pb-4 uppercase">
                    Chương VII: Collections - Nghệ Thuật Lưu Trữ Dữ Liệu Tối Ưu
                </h3>

                <section>
                    <h4 class="text-xl font-bold text-green-300 mb-3">ArrayList vs LinkedList: Trận Chiến Hiệu Năng</h4>
                    <p>
                        Hồi năm nhất, mình từng mắc lỗi ngây thơ khi dùng <code>ArrayList</code> để quản lý một danh sách hàng triệu bài báo cần thêm/xóa liên tục. Kết quả là ứng dụng chạy chậm như rùa. Lúc đó mình mới hiểu khái niệm <strong>Big O Notation</strong>. Việc hiểu rằng <code>ArrayList</code> tốn O(n) để xóa phần tử ở đầu, trong khi <code>LinkedList</code> chỉ tốn O(1) là một bước ngoặt về tư duy hiệu năng của mình.
                    </p>
                </section>

                <div class="p-6 bg-white/5 border border-green-500/30 rounded-3xl shadow-inner">
                    <h5 class="font-bold text-green-400 mb-3 underline text-center">Tư duy chọn lựa CTDL:</h5>
                    <ul class="list-none space-y-3">
                        <li class="flex items-center"><span class="mr-2 text-green-500">✔</span> Cần truy cập nhanh theo chỉ số? Hãy chọn <strong>ArrayList</strong>.</li>
                        <li class="flex items-center"><span class="mr-2 text-green-500">✔</span> Cần thêm xóa thường xuyên ở đầu/cuối? <strong>LinkedList</strong> là bạn tốt.</li>
                        <li class="flex items-center"><span class="mr-2 text-green-500">✔</span> Cần danh sách không trùng lập? Hãy gọi tên <strong>HashSet</strong>.</li>
                    </ul>
                </div>

                <section>
                    <h4 class="text-xl font-bold text-yellow-200 mb-3 italic">Hơn Cả Một Danh Sách</h4>
                    <p>
                        Java Collections Framework dạy mình về thiết kế hệ thống. Cách mà Oracle thiết kế Interface <code>List</code>, <code>Set</code>, <code>Map</code> là một ví dụ tuyệt vời về tính trừu tượng. Mình học được rằng: <em>"Hãy luôn lập trình dựa trên giao diện (Interface), không phải dựa trên lớp cụ thể (Implementation)."</em> Điều này giúp code của bạn cực kỳ dễ thay đổi sau này.
                    </p>
                </section>

                <div class="p-4 bg-green-950/20 border-t border-b border-green-400 text-center font-bold text-xl uppercase tracking-widest">
                    "Chọn đúng cấu trúc dữ liệu là bạn đã thắng được 50% bài toán lập trình."
                </div>
            </div>
        `,
        codeExample: `// Sử dụng Generic và Interface để tối ưu code\nList<String> names = new ArrayList<>();\nnames.add("Duy Vũ");\nnames.forEach(System.out::println);`,
        content: "Java Collections cung cấp các cấu trúc như List, Set, Map. Việc chọn đúng CTDL giúp ứng dụng chạy nhanh hơn và tiết kiệm bộ nhớ."
    },

    8: {
        title: "Prototypes & Inheritance trong JS",
        date: "19/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "ETMBVu7xWlc",
        personalShare: `
            <div class="space-y-8 text-gray-100 leading-relaxed text-justify">
                <h3 class="text-3xl font-extrabold text-blue-400 border-b-2 border-blue-500/50 pb-4 uppercase">
                    Chương VIII: Prototype - Linh Hồn Bí Ẩn Của JavaScript
                </h3>

                <section>
                    <h4 class="text-xl font-bold text-blue-300 mb-3">Sự Khác Biệt Cốt Lõi Với Java</h4>
                    <p>
                        Đây là phần "khó nuốt" nhất đối với những người học Java trước như mình. Trong Java, bạn có <strong>Class</strong> làm khuôn mẫu. Trong JavaScript, mọi thứ đều là <strong>Object</strong>. Khái niệm <strong>Prototype Chain</strong> (chuỗi nguyên mẫu) giúp mình hiểu tại sao một mảng trống lại có sẵn hàm <code>.map()</code> hay <code>.filter()</code>. Đó là vì nó "mượn" từ cha của nó thông qua chuỗi liên kết <code>__proto__</code>.
                    </p>
                </section>

                <div class="p-6 bg-blue-900/10 border-l-8 border-blue-400 rounded-lg italic text-lg leading-relaxed">
                    "Hiểu về Prototype là ranh giới giữa một lập trình viên biết dùng thư viện và một kỹ sư có khả năng viết ra thư viện."
                </div>

                <section>
                    <h4 class="text-xl font-bold text-yellow-200 mb-3 underline">Tại sao cần học cái này khi đã có Class ES6?</h4>
                    <p>
                        Nhiều bạn nói: "Có <code>class</code> rồi, học Prototype làm gì?". Sai lầm! <code>Class</code> trong JS chỉ là "Syntactic Sugar" (cú pháp cho đẹp) bao bọc lấy Prototype bên dưới. Nếu không hiểu Prototype, bạn sẽ không bao giờ giải thích được tại sao việc thay đổi một hàm trong <code>Array.prototype</code> lại khiến toàn bộ ứng dụng của bạn thay đổi hành vi. Hiểu bản chất giúp bạn tối ưu bộ nhớ bằng cách chia sẻ phương thức thay vì copy chúng cho mọi đối tượng.
                    </p>
                </section>

                <p class="text-center font-bold text-blue-400 py-4 border-y border-blue-800 italic">
                    "Trong JavaScript, kế thừa không phải là sao chép, mà là sự ủy thác (Delegation)."
                </p>
            </div>
        `,
        codeExample: `// Kế thừa qua Prototype thuần túy\nfunction Person(name) { this.name = name; }\nPerson.prototype.walk = function() { console.log(this.name + " đang đi bộ..."); };\nconst vu = new Person("Vũ");\nvu.walk();`,
        content: "Khác với Java, JS kế thừa dựa trên Prototype. Mọi object đều có liên kết đến một object khác tạo thành một chuỗi kế thừa."
    },

    9: {
        title: "Java vs JavaScript: Sự khác biệt cơ bản",
        date: "18/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "0lbw6OBerhA",
        personalShare: `
            <div class="space-y-8 text-gray-100 leading-relaxed text-justify">
                <h3 class="text-3xl font-extrabold text-indigo-400 border-b-2 border-indigo-500/50 pb-4 uppercase">
                    Chương IX: Java Và JavaScript - Hai Thế Giới, Một Sứ Mệnh
                </h3>

                <section>
                    <h4 class="text-xl font-bold text-yellow-300 mb-3">Ham Và Hamster: Cái Tên Gây Hiểu Lầm Nhất Lịch Sử</h4>
                    <p>
                        Mọi người hay đùa: "Java và JavaScript giống nhau như Ham và Hamster". Thực tế, chúng phục vụ hai triết lý lập trình hoàn toàn trái ngược. Mình đã dành rất nhiều thời gian để cân bằng cả hai. Java dạy mình sự <strong>Kỷ luật</strong> (Static Typing), giúp mình xây dựng những hệ thống khổng lồ và ổn định. JavaScript dạy mình sự <strong>Sáng tạo</strong> (Dynamic Typing), giúp mình biến những ý tưởng điên rồ thành giao diện sống động ngay tức thì.
                    </p>
                </section>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div class="p-5 bg-indigo-900/20 border border-indigo-500/30 rounded-2xl">
                        <h5 class="font-bold text-indigo-400 mb-2 underline">Java (The Backbone)</h5>
                        <p class="text-sm">Mạnh mẽ, bảo mật, biên dịch chặt chẽ. Phù hợp cho Backend, hệ thống ngân hàng, nơi mà lỗi một dấu phẩy cũng không được phép xảy ra.</p>
                    </div>
                    <div class="p-5 bg-yellow-900/10 border border-yellow-500/30 rounded-2xl">
                        <h5 class="font-bold text-yellow-400 mb-2 underline">JavaScript (The Soul)</h5>
                        <p class="text-sm">Linh hoạt, bất đồng bộ, chạy mọi nơi. Phù hợp cho Frontend, nơi mà trải nghiệm người dùng và tốc độ phản hồi là ưu tiên số một.</p>
                    </div>
                </div>

                <section>
                    <h4 class="text-xl font-bold text-yellow-300 mb-3 italic underline">Đúc kết hành trình 4 năm:</h4>
                    <p>
                        Học cả hai giúp mình trở thành một lập trình viên đa năng. Mình có cái nhìn bao quát từ cơ sở dữ liệu (Java) cho đến từng điểm ảnh trên màn hình (JS). Đừng bao giờ giới hạn bản thân ở một ngôn ngữ. Hãy học tư duy lập trình, vì ngôn ngữ cuối cùng cũng chỉ là công cụ để giải quyết vấn đề của con người.
                    </p>
                </section>

                <div class="p-6 bg-indigo-950/40 border-2 border-indigo-400 rounded-lg text-center font-bold text-indigo-200 shadow-2xl">
                    "Kỷ luật tạo nên sức mạnh, sáng tạo tạo nên sự khác biệt. Hãy làm chủ cả hai."
                </div>
            </div>
        `,
        codeExample: `// Sự khác biệt về kiểu dữ liệu\n// Java: int x = 10; x = "Vũ"; // Lỗi ngay lập tức!\n// JS: let x = 10; x = "Vũ"; // Chạy bình thường, cực kỳ linh hoạt!`,
        content: "Java là ngôn ngữ biên dịch kiểu tĩnh chạy trên JVM. JS là ngôn ngữ thông dịch kiểu động chạy trên trình duyệt. Cả hai đều cực kỳ mạnh mẽ."
    }
};