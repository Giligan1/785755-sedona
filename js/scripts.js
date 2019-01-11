      var link = document.querySelector(".open-form");

      var popup = document.querySelector(".pop-up-form");

      var form = document.querySelector("form");
      var arrival = document.querySelector("#arrival-date");
      var departure = document.querySelector("#date-of-departure");
      var adults = document.querySelector("#number-of-adults");
      var children = document.querySelector("#number-of-children");

      var isStorageSupport = true;
      var storageAdults = "";
      var storageChildren  = "";

      try {
        storageAdults = localStorage.getItem("adults");
        storageChildren = localStorage.getItem("children");
      } catch (err) {
        isStorageSupport = false;
      }

      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.toggle("modal-open")

        if (storageAdults || storageChildren) {
          adults.value = storageAdults;
          children.value = storageChildren;
        }

        arrival.focus();
      })

      form.addEventListener("submit", function (evt) {
        if (!arrival.value || !departure.value || !adults.value || !children.value) {
          evt.preventDefault();
        } else {
          if (isStorageSupport) {
            localStorage.setItem("adults", adults.value);
            localStorage.setItem("children", children.value);
          }
        }
      })
