// If page opens firstly, it's redirects to profile page.
const redirect = (ev) => {
    if (ev.method !== 'GET') return {}

    const feedRegex = '^.*vk\.com\/feed$';

    const result = ev.url.match(feedRegex) !== null;
    if (result) {
        const profile = ev.url.replace('feed', 'id0');

        return {redirectUrl: profile};
    }

    return {};
}

// Start
const filter = { urls: ['*://*.vk.com/*'], types: ['main_frame']}
browser.webRequest.onBeforeRequest.addListener(redirect, filter, ["blocking"]);