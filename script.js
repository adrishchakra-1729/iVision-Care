const searchInput = document.getElementById("searchInput");
const cityFilter = document.getElementById("cityFilter");
const hospitalCards = document.querySelectorAll(".hospital-card");

function filterHospitals() {
  const searchText = searchInput.value.toLowerCase();
  const city = cityFilter.value;

  hospitalCards.forEach(card => {
    const name = card.querySelector("h3").innerText.toLowerCase();
    const cardCity = card.dataset.city;

    const matchesSearch = name.includes(searchText);
    const matchesCity = city === "all" || city === cardCity;

    card.style.display = matchesSearch && matchesCity ? "block" : "none";
  });
}

function openAppointment(hospital) {
  document.getElementById("appointmentModal").style.display = "flex";
  document.getElementById("hospitalName").value = hospital;
}

function closeAppointment() {
  document.getElementById("appointmentModal").style.display = "none";
  document.getElementById("appointmentForm").style.display = "block";
  document.getElementById("appointmentSuccess").style.display = "none";
}

document
  .getElementById("appointmentForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    this.style.display = "none";
    document.getElementById("appointmentSuccess").style.display = "block";
  });


searchInput?.addEventListener("input", filterHospitals);
cityFilter?.addEventListener("change", filterHospitals);
