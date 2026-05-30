// ヘッダー左の site_name (Ageless Engineering) テキストをクリックでトップページへ遷移させる。
// 既存のロゴボタン (.md-logo) のリンク先を流用するため、ローカル/本番どちらでも正しく動作する。
document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".md-header__title");
  var logo = document.querySelector(".md-header__button.md-logo");
  if (!title || !logo) return;

  var href = logo.getAttribute("href");
  if (!href) return;

  title.style.cursor = "pointer";
  title.addEventListener("click", function () {
    window.location.href = href;
  });
});
