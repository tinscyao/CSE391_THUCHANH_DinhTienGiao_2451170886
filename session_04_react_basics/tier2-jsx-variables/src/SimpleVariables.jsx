function PersonalInfo() {
    const ten = "Đinh Tiến Giao";
    const tuoi = 20;
    const queQuan = "Việt Nam";
    
    // Tính giờ hiện tại
    const gio = new Date().getHours();
    let loiChao = "Chào buổi tối";
    if (gio < 12) loiChao = "Chào buổi sáng";
    else if (gio < 18) loiChao = "Chào buổi chiều";
    
    // Tính BMI: Giả sử cân nặng 60kg, chiều cao 1.7m
    const canNang = 60;
    const chieuCao = 1.7;
    const bmi = (canNang / (chieuCao * chieuCao)).toFixed(1);
    
    return (
        <div>
            <h1>Thông tin: {ten}</h1>
            <p>Tuổi: {tuoi} - Quê quán: {queQuan}</p>
            <h2>{loiChao}!</h2>
            <p>Chỉ số BMI của bạn là: {bmi}</p>
        </div>
    );
}