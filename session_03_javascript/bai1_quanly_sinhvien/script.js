var danhSachSV = [];
var dangSua = -1;

khoiDong();

function khoiDong() {
    var duLieu = localStorage.getItem('students');
    if (duLieu) {
        danhSachSV = JSON.parse(duLieu);
    }
    hienThiBang();
    capNhatThongKe();
}

function hienThiBang() {
    var bang = document.getElementById('danhsach');
    bang.innerHTML = '';

    if (danhSachSV.length === 0) {
        bang.innerHTML = '<tr><td colspan="7" style="text-align:center;">Chưa có sinh viên nào</td></tr>';
        return;
    }

    for (var i = 0; i < danhSachSV.length; i++) {
        var sv = danhSachSV[i];
        var dong = document.createElement('tr');
        dong.innerHTML =
            '<td>' + sv.ma + '</td>' +
            '<td>' + sv.ten + '</td>' +
            '<td>' + sv.ngaySinh + '</td>' +
            '<td>' + sv.lop + '</td>' +
            '<td>' + sv.diem + '</td>' +
            '<td>' + sv.email + '</td>' +
            '<td>' +
            '<button class="btn-edit" onclick="suaSV(' + i + ')">Sửa</button>' +
            '<button class="btn-delete" onclick="xoaSV(' + i + ')">Xóa</button>' +
            '</td>';
        bang.appendChild(dong);
    }
}

function moForm() {
    dangSua = -1;
    document.getElementById('tieudeForm').textContent = 'Thêm Sinh Viên';
    xoaForm();
    document.getElementById('popup').classList.add('show');
}

function dongForm() {
    document.getElementById('popup').classList.remove('show');
    xoaForm();
}

function xoaForm() {
    document.getElementById('maSV').value = '';
    document.getElementById('hoTen').value = '';
    document.getElementById('ngaySinh').value = '';
    document.getElementById('lop').value = '';
    document.getElementById('diem').value = '';
    document.getElementById('email').value = '';
    dangSua = -1;
}

function luuSinhVien(e) {
    e.preventDefault();

    var sinhVien = {
        ma: document.getElementById('maSV').value,
        ten: document.getElementById('hoTen').value,
        ngaySinh: document.getElementById('ngaySinh').value,
        lop: document.getElementById('lop').value,
        diem: parseFloat(document.getElementById('diem').value),
        email: document.getElementById('email').value
    };

    if (dangSua === -1) {
        danhSachSV.push(sinhVien);
        hienThongBao('Thêm sinh viên thành công!');
    } else {
        danhSachSV[dangSua] = sinhVien;
        hienThongBao('Cập nhật sinh viên thành công!');
    }

    localStorage.setItem('students', JSON.stringify(danhSachSV));
    hienThiBang();
    capNhatThongKe();
    dongForm();
}

function suaSV(viTri) {
    dangSua = viTri;
    document.getElementById('tieudeForm').textContent = 'Sửa Sinh Viên';

    var sv = danhSachSV[viTri];
    document.getElementById('maSV').value = sv.ma;
    document.getElementById('hoTen').value = sv.ten;
    document.getElementById('ngaySinh').value = sv.ngaySinh;
    document.getElementById('lop').value = sv.lop;
    document.getElementById('diem').value = sv.diem;
    document.getElementById('email').value = sv.email;

    document.getElementById('popup').classList.add('show');
}

function xoaSV(viTri) {
    var xacNhan = confirm('Bạn có chắc muốn xóa sinh viên này?');
    if (xacNhan) {
        danhSachSV.splice(viTri, 1);
        localStorage.setItem('students', JSON.stringify(danhSachSV));
        hienThiBang();
        capNhatThongKe();
        hienThongBao('Xóa sinh viên thành công!');
    }
}

function capNhatThongKe() {
    document.getElementById('totalStudents').textContent = danhSachSV.length;

    if (danhSachSV.length === 0) {
        document.getElementById('avgScore').textContent = '0';
        return;
    }

    var tongDiem = 0;
    for (var i = 0; i < danhSachSV.length; i++) {
        tongDiem = tongDiem + danhSachSV[i].diem;
    }
    var diemTB = tongDiem / danhSachSV.length;
    document.getElementById('avgScore').textContent = diemTB.toFixed(2);
}

function hienThongBao(noiDung) {
    var thongBao = document.getElementById('thongbao');
    thongBao.textContent = noiDung;
    thongBao.className = 'notification success';

    setTimeout(function () {
        thongBao.className = 'notification';
    }, 3000);
}
