const blogDetails = {
    1: {
        title: "JavaScript ES6+: Những tính năng phải biết",
        date: "26/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "rhi5bNOCiVo", 
        personalShare: "Hồi mới học JS, mình cực kỳ 'ám ảnh' với việc quản lý scope của biến 'var', code cứ chạy được một lúc là biến nhảy lung tung. Khi chuyển sang ES6 với 'let' và 'const', mình cảm thấy như được giải thoát vậy. Đặc biệt là Template Literals, nó giúp mình không còn phải cộng chuỗi 'nối đuôi' bằng dấu cộng (+) khổ sở như trước nữa. Lời khuyên của mình: Hãy thuộc lòng ES6 trước khi chạm vào bất cứ Framework nào.",
        codeExample: `// Ví dụ về Destructuring và Arrow Function
const user = { name: 'Duy Vũ', job: 'Developer' };
const { name, job } = user;

const sayHi = () => console.log(\`Chào \${name}, bạn là \${job} đúng không?\`);
sayHi();`,
        content: "ES6 (ECMAScript 2015) mang đến những thay đổi nền tảng cho JS như Class, Modules, Promise giúp xử lý bất đồng bộ mượt mà hơn. Nó giúp ngôn ngữ này thoát khỏi cái bóng 'ngôn ngữ đồ chơi' để trở thành một công cụ mạnh mẽ cho cả Backend và Frontend."
    },
    2: {
        title: "Java OOP: 4 tính chất quan trọng",
        date: "25/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "qwPvkhemvHA",
        personalShare: "Lúc đầu mình nghĩ OOP chỉ là lý thuyết suông để đi phỏng vấn. Nhưng khi làm dự án thực tế, mình mới thấy tính 'Đóng gói' quan trọng thế nào để bảo vệ dữ liệu. Có lần mình để public hết mọi thứ và kết quả là logic bị sai be bét vì code ở nơi khác vô tình sửa đổi dữ liệu. Học OOP là học cách quản lý sự phức tạp, đừng chỉ học thuộc lòng định nghĩa, hãy thử vẽ sơ đồ lớp (Class Diagram) trước khi code.",
        codeExample: `// Tính kế thừa và Đa hình trong Java
class Animal {
    void speak() { System.out.println("Animal sounds"); }
}
class Dog extends Animal {
    @Override
    void speak() { System.out.println("Woof Woof!"); }
}`,
        content: "OOP bao gồm: Đóng gói (Che giấu dữ liệu), Kế thừa (Dùng lại mã nguồn), Đa hình (Một tên gọi - nhiều thực thi) và Trừu tượng (Tập trung vào tính năng thay vì chi tiết cài đặt)."
    },
    3: {
        title: "Xử lý bất đồng bộ trong JS",
        date: "24/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "XYVJKnZc0SY",
        personalShare: "Thú thật, mình từng bị rơi vào 'Callback Hell' với 5-6 tầng lồng nhau, nhìn code mà muốn bỏ nghề luôn. Đến khi học về Promise và đặc biệt là Async/Await, mọi thứ trở nên sáng sủa như ban ngày. Kinh nghiệm xương máu của mình là: Luôn luôn sử dụng try-catch khi dùng Async/Await, nếu không bạn sẽ mất hàng giờ chỉ để tìm xem lỗi nó 'nuốt' ở đâu đấy!",
        codeExample: `// Sử dụng Async/Await để gọi API
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Lỗi rồi: ", error);
    }
}`,
        content: "Cơ chế Event Loop trong JS cho phép thực hiện các tác vụ tốn thời gian như gọi API hay đọc file mà không làm treo trình duyệt. Đây là linh hồn của các ứng dụng web hiện đại."
    },
    4: {
        title: "DOM Manipulation cơ bản đến nâng cao",
        date: "23/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "8tTAI8dqoNQ",
        personalShare: "Dù hiện tại React hay Vue rất phổ biến, nhưng mình vẫn dành thời gian đào sâu vào DOM thuần. Tại sao? Vì khi bạn hiểu cách trình duyệt render một thẻ div, cách event bubbling hoạt động, bạn sẽ tối ưu được hiệu năng cực tốt. Đừng lạm dụng thư viện khi bạn chỉ cần thay đổi một cái màu nền hay ẩn hiện một cái modal. Vanilla JS vẫn có sức hút rất riêng!",
        codeExample: `// Thay đổi nội dung và style của một thẻ HTML
const title = document.querySelector('#main-title');
title.textContent = "Chào mừng bạn!";
title.style.color = "#38bdf8";

title.addEventListener('click', () => {
    alert('Bạn đã click vào tiêu đề!');
});`,
        content: "DOM (Document Object Model) là giao diện lập trình cho phép JS tương tác với HTML. Hiểu sâu về DOM giúp bạn tối ưu hóa hiệu năng render của trang web."
    },
    5: {
        title: "Kết nối Database với JDBC trong Java",
        date: "22/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "5Nwk8rCLv7Y",
        personalShare: "Lần đầu tiên mình chạy câu lệnh 'SELECT' từ Java và thấy dữ liệu hiện lên Console, mình đã nhảy cẫng lên vì sướng. Nhưng hãy cẩn thận với SQL Injection! Mình từng viết code cộng chuỗi trực tiếp vào câu query và bị thầy giáo nhắc nhở ngay. Hãy luôn dùng PreparedStatement để bảo mật dữ liệu. Đó là bài học đầu tiên về bảo mật mà mình không bao giờ quên.",
        codeExample: `// Các bước kết nối JDBC cơ bản
Connection conn = DriverManager.getConnection(url, user, pass);
Statement st = conn.createStatement();
ResultSet rs = st.executeQuery("SELECT * FROM Users");
while(rs.next()) {
    System.out.println(rs.getString("username"));
}`,
        content: "JDBC là thư viện chuẩn của Java để làm việc với CSDL quan hệ. Nó cung cấp các phương thức để thực thi câu lệnh SQL và lấy kết quả trả về."
    },
    6: {
        title: "Regex trong JavaScript: Xử lý chuỗi",
        date: "21/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "YGpWSC8Kxvk",
        personalShare: "Regex giống như một loại 'ngôn ngữ ngoài hành tinh' vậy. Mình từng mất cả buổi tối chỉ để viết một đoạn check định dạng mật khẩu (phải có chữ hoa, chữ thường, số...). Nhưng tin mình đi, một khi bạn 'thuần hóa' được nó, bạn sẽ xử lý chuỗi nhanh hơn bất cứ ai. Đừng cố nhớ hết, hãy dùng các công cụ như Regex101 để test trước khi đưa vào code chính thức.",
        codeExample: `// Kiểm tra định dạng Email bằng Regex
const emailPattern = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;
const checkEmail = (email) => emailPattern.test(email);

console.log(checkEmail("test@gmail.com")); // true`,
        content: "Regular Expression (Regex) là công cụ cực mạnh để tìm kiếm và thay thế chuỗi. Đây là kỹ năng không thể thiếu để validate dữ liệu đầu vào."
    },
    7: {
        title: "Cấu trúc dữ liệu Array & List trong Java",
        date: "20/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "m4QD2ykLiiw",
        personalShare: "Hồi xưa mình cứ ArrayList mà dùng cho mọi trường hợp. Sau này làm bài toán xử lý hàng triệu bản ghi cần thêm xóa liên tục, app chạy chậm rì mình mới nhận ra sức mạnh của LinkedList. Việc hiểu bản chất cấu trúc dữ liệu bên dưới giúp bạn từ một 'thợ code' trở thành một 'lập trình viên' thực thụ. Hãy chọn công cụ đúng cho bài toán đúng.",
        codeExample: `// Sử dụng ArrayList trong Java
List<String> students = new ArrayList<>();
students.add("Duy Vũ");
students.add("Frontend Dev");

for(String s : students) {
    System.out.println(s);
}`,
        content: "Java Collections Framework cung cấp các cấu trúc như List, Set, Map. Việc chọn đúng cấu trúc dữ liệu giúp ứng dụng của bạn chạy nhanh hơn và tiết kiệm bộ nhớ."
    },
    8: {
        title: "Prototypes & Inheritance trong JS",
        date: "19/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "ETMBVu7xWlc",
        personalShare: "Đây có lẽ là phần khó nuốt nhất trong JS. Mình đã mất rất lâu để hiểu tại sao JS không có 'Class' thực sự (trước ES6) mà lại dùng Prototype. Hiểu về Prototype Chain giúp bạn giải thích được tại sao một mảng lại có phương thức .map() hay .filter(). Đây chính là ranh giới giữa việc 'biết dùng JS' và 'hiểu sâu về JS'.",
        codeExample: `// Kế thừa qua Prototype trong JS
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log("Hi, I am " + this.name);
};

const vu = new Person("Vũ");
vu.greet();`,
        content: "Khác với các ngôn ngữ hướng đối tượng truyền thống, JS kế thừa dựa trên Prototype. Mọi object đều có một link liên kết đến một object khác."
    },
    9: {
        title: "Java vs JavaScript: Sự khác biệt cơ bản",
        date: "18/12/2025",
        author: "Lê Duy Vũ",
        youtubeId: "0lbw6OBerhA",
        personalShare: "Mọi người hay đùa Java và JavaScript là anh em, nhưng thực tế chúng khác nhau hoàn toàn. Mình học Java để rèn luyện tư duy chặt chẽ, kiểu dữ liệu tường minh (Static Typing), còn học JS để tận hưởng sự linh hoạt, sáng tạo của Frontend. Làm chủ được cả hai giúp mình có cái nhìn đa chiều: một bên là sự kỷ luật của hệ thống, một bên là sự bay bổng của giao diện.",
        codeExample: `// Java (Static typing)
int number = 10; 

// JavaScript (Dynamic typing)
let number = 10;
number = "Mười"; // Vẫn hợp lệ trong JS`,
        content: "Java là ngôn ngữ biên dịch, kiểu dữ liệu tĩnh và chạy trên JVM. JavaScript là ngôn ngữ thông dịch, kiểu dữ liệu động và chủ yếu chạy trên trình duyệt. Cả hai đều mạnh mẽ nhưng phục vụ các mục đích khác nhau."
    }
};