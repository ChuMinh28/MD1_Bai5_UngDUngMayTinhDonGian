function cong() {
    let cong1 = +document.getElementById('nhapso1').value
    let cong2 = +document.getElementById('nhapso2').value
    let ketQua
    ketQua = cong1+cong2
    document.getElementById('result').innerHTML= ketQua
}
function tru() {
    let tru1 = +document.getElementById('nhapso1').value
    let tru2 = +document.getElementById('nhapso2').value
    ketQua = tru1-tru2
    document.getElementById('result').innerHTML= ketQua
}
function nhan() {
    let nhan1 = +document.getElementById('nhapso1').value
    let nhan2 = +document.getElementById('nhapso2').value
    ketQua=nhan1*nhan2
    document.getElementById('result').innerHTML= ketQua
}
function chia() {
    let chia1 = +document.getElementById('nhapso1').value
    let chia2 = +document.getElementById('nhapso2').value
    ketQua=chia1/chia2
    document.getElementById('result').innerHTML= ketQua
}