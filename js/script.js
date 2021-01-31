$(document).ready(function () {
  const formatTime = time => {
    if (time < 0 || !time) {
      return "00";
    }

    return time.toFixed(0).toString().padStart(2, "0");
  };

  $(".info-button, .modal-background, .modal-close-button").click(function (e) {
    if ($(this).hasClass("info-button")) {
      const card = $(this).closest(".card, .long-card");
      const logo = card.find(".card-logo").attr("src");
      const companyName = card.data("name");

      if (logo) {
        $(".modal-logo-button")
          .css({
            backgroundImage: `url(${logo})`
          })
          .text("");
      } else {
        $(".modal-logo-button")
          .css({ backgroundImage: "none" })
          .text((companyName || "Company Name").toUpperCase());
      }

      $(".modal").removeClass("hidden");
      return;
    }

    $(".modal").addClass("hidden");
  });

  $(".hamburger-menu-icon").click(function (e) {
    $(".drop-down").toggleClass("active");
  });

  const getUnit = (value, unit) => {
    if (value <= 0) {
      return `0 ${unit}s`;
    }

    if (value === 1) {
      return `${value.toFixed(0)} ${unit}`;
    }

    return `${value.toFixed(0)} ${unit}s`;
  };

  setInterval(function () {
    $("[data-countdown-date]").each(function () {
      const date = $(this).data("countdown-date");
      const parsedDate = luxon.DateTime.fromISO(date);
      const { days, hours, minutes } = parsedDate.diffNow([
        "days",
        "hours",
        "minutes"
      ]);

      const desktopCountdownText = [
        getUnit(days, "Day"),
        getUnit(hours, "Hour")
      ].join(" ");
      const mobileCountdownText = [
        formatTime(days),
        formatTime(hours),
        formatTime(minutes)
      ].join(":");

      $(this)
        .find(".long-countdown.desktop, .countdown.desktop")
        .text(desktopCountdownText);
      $(this)
        .find(".long-countdown.mobile, .countdown.mobile")
        .text(mobileCountdownText);
    });
  }, 1000);
});
