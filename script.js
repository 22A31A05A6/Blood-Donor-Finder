/* ============================================
   LifeLine — shared script.js
   Used by every page. Two jobs:
   1. Homepage dropdown -> jump to a blood type page
   2. Blood type pages -> render + search-filter the donor list
   ============================================ */

// ---------- 1. Homepage dropdown navigation ----------
// Only runs if the dropdown exists on the current page (i.e. index.html)
const bloodTypeSelect = document.getElementById("bloodTypeSelect");
if (bloodTypeSelect) {
  bloodTypeSelect.addEventListener("change", function () {
    if (this.value) {
      window.location.href = this.value;
    }
  });
}

// ---------- 2. Donor list rendering + search (blood type pages) ----------
// Each blood-type page defines its own `donors` array (see bottom of that
// page's inline <script>) before calling initDonorPage().

function initDonorPage(donors) {
  const tbody = document.getElementById("donorTableBody");
  const emptyState = document.getElementById("emptyState");
  const countLabel = document.getElementById("donorCount");
  const searchInput = document.getElementById("locationSearch");

  function renderDonors(list) {
    if (list.length === 0) {
      tbody.innerHTML = "";
      emptyState.style.display = "block";
    } else {
      emptyState.style.display = "none";
      tbody.innerHTML = list.map(function (d) {
        return (
          "<tr>" +
          "<td class='donor-name'>" + d.name + "</td>" +
          "<td>" + d.city + "</td>" +
          "<td class='donor-phone'><a href='tel:" + d.phone + "'>" + d.phone + "</a></td>" +
          "</tr>"
        );
      }).join("");
    }
    countLabel.textContent = list.length + (list.length === 1 ? " donor listed" : " donors listed");
  }

  // Initial render: show everyone
  renderDonors(donors);

  // Live filter as the user types a city/location
  searchInput.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();
    const filtered = query
      ? donors.filter(function (d) { return d.city.toLowerCase().includes(query); })
      : donors;
    renderDonors(filtered);
  });
}
