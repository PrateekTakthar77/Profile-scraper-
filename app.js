(function () {
  const title = document.querySelector(".text-heading-xlarge").textContent;
  const link = document.URL;
  const profile_pic = document.querySelector(".pv-top-card--photo .pv-top-card__non-self-photo-wrapper .pv-top-card-profile-picture .pv-top-card-profile-picture__image").src; 
  const bio = document.querySelector(".text-body-medium").textContent;
  const about = document.querySelector("#about ~ .display-flex .pv-shared-text-with-see-more .visually-hidden").textContent;
  const company = document.querySelector(".pv-text-details__right-panel .pv-text-details__right-panel-item .pv-text-details__right-panel-item-link .pv-text-details__right-panel-item-text .inline-show-more-text").textContent;
  const loca = document.querySelector(".mt2 .pv-text-details__left-panel:last-child .text-body-small").textContent;
  const exp = document.querySelector("#experience ~ .pvs-list__outer-container .pvs-list .artdeco-list__item");
  const result = {
      name: title,
      profile_picture: profile_pic,
      linkedin_profile_link: link,
      Bio: bio,
      abouT:about,
      company:company,
      email: "1234@gmail.com",
      phone: 12345566,
      designation: "manager",
      location: loca,
    };
    console.log(result);
})();


// last exp document.querySelector("#experience ~ .pvs-list__outer-container .pvs-list .artdeco-list__item:last-child");
//  complete exp div document.querySelector("#experience ~ .pvs-list__outer-container");
