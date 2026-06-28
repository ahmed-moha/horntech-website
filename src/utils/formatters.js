export function formatAddress(headquarters) {
  const { building, street, district, city, country, postalCode } = headquarters;
  return [building, street, district, city, country, postalCode]
    .filter(Boolean)
    .join(', ');
}

export function formatPhoneLink(phone) {
  return `tel:${phone.replace(/\s/g, '')}`;
}

export function formatEmailLink(email) {
  return `mailto:${email}`;
}

export function getMapEmbedUrl(headquarters) {
  const query = encodeURIComponent(formatAddress(headquarters));
  return `https://maps.google.com/maps?q=${query}&output=embed`;
}

export function formatLocationAddress(location) {
  return [location.district, location.city].filter(Boolean).join(', ');
}
