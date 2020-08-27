import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Best band ever.. Mastodon rules!", "New album coming out this christmas... Check it out!"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
