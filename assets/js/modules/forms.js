const forms = (formSelector, overlayActive = false) => {
  const form = document.querySelector(formSelector);

  async function postData(url, data) {
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res;
  }

  function statusMessage(isSuccess, isOverlayActive = false) {
    const modal = document.querySelector(".modal-enroll"),
      sucMessage = document.querySelector(".success-message"),
      errMessage = document.querySelector(".error-message"),
      closeMessage = document.querySelectorAll(".close-status"),
      overlay = document.querySelector(".overlay");

    modal.classList.remove("modal-active");

    if (!isOverlayActive) {
      overlay.style.display = "flex";
    }

    if (isSuccess) {
      sucMessage.style.display = "flex";
      sucMessage.style.opacity = 1;
    } else {
      errMessage.style.display = "flex";
      errMessage.style.opacity = 1;
    }

    closeMessage.forEach((item) => {
      item.addEventListener("click", () => {
        overlay.style.display = "none";
        sucMessage.style.display = "none";
        errMessage.style.display = "none";
        document.querySelector("body").style.overflowY = "scroll";
      });
    });
  }

  function clearInputs(elem) {
    Object.values(elem.children).forEach((item) => {
      if (item.type !== "submit") {
        item.value = "";
      }
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let formData = new FormData(form);

    try {
      postData("assets/php/server.php", formData)
        .then(async (res) => {
          clearInputs(form);

          if (res.status == 200 && overlayActive) {
            statusMessage(true, true);
          }

          if (res.status == 200 && overlayActive == false) {
            statusMessage(true);
          }

          return await res.text();
        })
        .then((data) => console.log(data))
        .catch((e) => {
          statusMessage(false);
          throw new Error("See more:", e);
        });
    } catch (e) {
      throw new Error("Oh boy, it's broken... See more:", e);
    }
  });
};

export default forms;
