(function () {
	var consentCookieName = 'viable_cookie_consent';
	var analyticsId = 'UA-199075-6';

	function getCookie(name) {
		return document.cookie.split('; ').reduce(function (value, part) {
			var pieces = part.split('=');
			return pieces[0] === name ? decodeURIComponent(pieces.slice(1).join('=')) : value;
		}, '');
	}

	function setCookie(name, value, days) {
		var expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
		document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/; SameSite=Lax; Secure';
	}

	function loadAnalytics() {
		if (window.ga) {
			return;
		}

		window.GoogleAnalyticsObject = 'ga';
		window.ga = window.ga || function () {
			(window.ga.q = window.ga.q || []).push(arguments);
		};
		window.ga.l = 1 * new Date();

		var script = document.createElement('script');
		script.async = true;
		script.src = 'https://www.google-analytics.com/analytics.js';
		var firstScript = document.getElementsByTagName('script')[0];
		firstScript.parentNode.insertBefore(script, firstScript);

		window.ga('create', analyticsId, 'auto');
		window.ga('send', 'pageview');
	}

	function removeBanner(banner) {
		if (banner && banner.parentNode) {
			banner.parentNode.removeChild(banner);
		}
	}

	function showBanner() {
		var banner = document.createElement('section');
		banner.className = 'cookie-consent';
		banner.setAttribute('aria-label', 'Nastavenia cookies');
		banner.innerHTML = '<div class="cookie-consent__inner"><p class="cookie-consent__text">Používame nevyhnutnú cookie na uloženie vašej voľby a voliteľné analytické cookies Google Analytics, ktoré nám pomáhajú porozumieť návštevnosti webu. Analytiku spustíme iba po vašom súhlase. <a href="/cookies" class="cookie-consent__link">Viac o cookies</a></p><div class="cookie-consent__actions"><button type="button" class="button cookie-consent__button cookie-consent__button--secondary" data-cookie-reject>Len nevyhnutné</button><button type="button" class="button button__accent cookie-consent__button" data-cookie-accept>Súhlasím</button></div></div>';
		document.body.appendChild(banner);

		banner.querySelector('[data-cookie-accept]').addEventListener('click', function () {
			setCookie(consentCookieName, 'analytics', 180);
			loadAnalytics();
			removeBanner(banner);
		});

		banner.querySelector('[data-cookie-reject]').addEventListener('click', function () {
			setCookie(consentCookieName, 'necessary', 180);
			removeBanner(banner);
		});
	}

	document.addEventListener('DOMContentLoaded', function () {
		var consent = getCookie(consentCookieName);
		if (consent === 'analytics') {
			loadAnalytics();
			return;
		}

		if (consent !== 'necessary') {
			showBanner();
		}
	});
}());
