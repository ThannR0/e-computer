import Layout from "../Layouts/Layouts"

const About = () => {
    return (<Layout>
         <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Giới Thiệu Trang Web</h1>
        <p className="text-lg leading-relaxed mb-10">
          Chào mừng bạn đến với <span className="font-semibold">E-Commerce Computer</span> – nền tảng mua sắm máy tính hàng đầu với trải nghiệm nhanh chóng, tiện lợi và an toàn.
          Chúng tôi cung cấp các sản phẩm công nghệ chất lượng từ những thương hiệu uy tín.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-blue-500">Sứ Mệnh</h3>
            <p>
              Cung cấp cho người dùng trải nghiệm mua sắm công nghệ hiện đại, minh bạch và dễ sử dụng nhất.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-blue-500">Giá Trị</h3>
            <p>
              Uy tín - Minh bạch - Chất lượng là kim chỉ nam trong mọi hoạt động và sản phẩm của chúng tôi.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-blue-500">Đội Ngũ</h3>
            <p>
              Được phát triển bởi sinh viên TDTU với đam mê công nghệ và mong muốn tạo ra giá trị thực tế cho cộng đồng.
            </p>
          </div>
        </div>

        <div className="mt-12 text-gray-600">
          <p>
            Nếu bạn có câu hỏi hoặc góp ý, hãy liên hệ với chúng tôi qua email của Nguyễn Đức Thân:{" "}
            <span className="text-blue-600 font-medium">rogamgu@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
    </Layout>)
};

export default About;
