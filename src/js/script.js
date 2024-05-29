document.addEventListener("DOMContentLoaded", () => {
  const setupDropdown = (buttonId, dropdownId) => {
    const button = document.getElementById(buttonId);
    const dropdown = document.getElementById(dropdownId);

    let hideTimeout;

    button.addEventListener("mouseenter", () => {
      clearTimeout(hideTimeout);
      dropdown.classList.remove("hidden");
    });

    button.addEventListener("mouseleave", () => {
      hideTimeout = setTimeout(() => {
        if (!dropdown.matches(":hover")) {
          dropdown.classList.add("hidden");
        }
      }, 100);
    });

    dropdown.addEventListener("mouseenter", () => {
      clearTimeout(hideTimeout);
      dropdown.classList.remove("hidden");
    });

    dropdown.addEventListener("mouseleave", () => {
      hideTimeout = setTimeout(() => {
        dropdown.classList.add("hidden");
      }, 100);
    });
  };

  setupDropdown("cryptoDropdownButton", "cryptoDropdown");
  setupDropdown("exchangeDropdownButton", "exchangeDropdown");

  // Mobile menu toggle
  const menuButton = document.getElementById("menuButton");
  const navbar = document.getElementById("navbar-cta");

  menuButton.addEventListener("click", () => {
    navbar.classList.toggle("hidden");
  });
});

document.getElementById("loginButton").addEventListener("click", function () {
  window.location.href = "/src/screen/login.html";
});
document.getElementById("signUpButton").addEventListener("click", function () {
  window.location.href = "/src/screen/signup.html";
});
//---
document.addEventListener("DOMContentLoaded", () => {
  const cryptoDropdownButton = document.getElementById(
    "exchangeDropdownButton"
  );
  const cryptoDropdown = document.getElementById("exchangeDropdown");

  cryptoDropdownButton.addEventListener("mouseenter", () => {
    cryptoDropdown.classList.remove("hidden");
  });

  cryptoDropdownButton.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!cryptoDropdown.matches(":hover")) {
        cryptoDropdown.classList.add("hidden");
      }
    }, 100);
  });

  cryptoDropdown.addEventListener("mouseleave", () => {
    cryptoDropdown.classList.add("hidden");
  });

  cryptoDropdown.addEventListener("mouseenter", () => {
    cryptoDropdown.classList.remove("hidden");
  });
});
