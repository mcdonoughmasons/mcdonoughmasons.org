/*
 * Fraternal Lodge Website Script
 *
 * Handles interactions such as the mobile navigation toggle. This script is
 * intentionally lightweight to ensure fast page loads and optimal
 * accessibility.  Vanilla JavaScript is used instead of heavy frameworks.
 */

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (toggleButton && mobileNav) {
    toggleButton.addEventListener('click', () => {
      const expanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
      toggleButton.setAttribute('aria-expanded', !expanded);
      mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
    });
  }
});