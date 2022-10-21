const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, overlaySelector = ".overlay") {
    const triggers = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      closeBtn = document.querySelector(closeSelector),
      body = document.querySelector("body"),
      overlay = document.querySelector(overlaySelector);

    function toggleOverlay(isOpen) {
      if (isOpen) {
        overlay.style.display = "block";
        overlay.animate(
          [
            {
              opacity: 0,
            },
            { opacity: 1 },
          ],
          {
            duration: 300,
          }
        );
      } else {
        overlay.style.display = "none";
      }
    }

    function openModal() {
      toggleOverlay(true);

      body.style.marginRight = `${window.innerWidth - document.documentElement.clientWidth}px`;

      modal.classList.add("modal-active");
      body.style.overflowY = "hidden";
    }

    function closeModal() {
      toggleOverlay(false);

      modal.classList.remove("modal-active");

      body.style.overflowY = "auto";
      body.style.marginRight = "0";
    }

    triggers.forEach((item) => {
      item.addEventListener("click", openModal);
    });

    closeBtn.addEventListener("click", closeModal);
  }

  bindModal(".open-enroll", ".modal-enroll", ".enroll-close-btn");
};

export default modals;
