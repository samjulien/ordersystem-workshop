hashPrefixConfig.$inject = ['$locationProvider'];
export function hashPrefixConfig($locationProvider) {
  $locationProvider.hashPrefix('');
}
