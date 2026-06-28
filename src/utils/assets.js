const logoModules = import.meta.glob('../assets/logo.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
});

export const companyLogo = Object.values(logoModules)[0] ?? null;

export function resolveImagePath(path) {
  if (!path) return null;
  if (path === '/images/logo.png' && companyLogo) {
    return companyLogo;
  }
  return path.startsWith('/') ? path : `/${path}`;
}

export function getInitials(name) {
  if (!name) return '?';
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
