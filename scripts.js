// Fungsi untuk memilih metode pembayaran
function selectPayment(paymentMethod) {
  // Menampilkan metode pembayaran yang dipilih
  document.getElementById("payment-method-name").textContent = paymentMethod;

  // Mengaktifkan tombol konfirmasi
  document.getElementById("confirm-button").disabled = false;
}

// Fungsi untuk mengonfirmasi pembayaran dan mengarahkan ke halaman thankyou.html
function confirmPayment() {
  // Menyimpan metode pembayaran yang dipilih
  const paymentMethod = document.getElementById(
    "payment-method-name"
  ).textContent;

  // Memeriksa apakah metode pembayaran telah dipilih
  if (paymentMethod === "None") {
    alert("Please select a payment method first.");
    return;
  }

  // Arahkan pengguna ke halaman thankyou.html setelah pembayaran berhasil
  window.location.href = "thankyou.html";
}
