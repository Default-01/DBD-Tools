/**
 * @description Get cache file with its parsed json content.
 * @example const cache = getCache('./cache.json'); // returns cache file
 */
export declare function getCache(path: string): any;
/**
 * @description Update cache file.
 * @throws {Error} - If the cache file could not be updated.
 * @example updateCache(cache, './cache.json'); // returns a promise
 */
export declare function updateCache(cache: Record<string, any>, path: string): Promise<boolean>;
declare const _default: {
    getCache: typeof getCache;
    updateCache: typeof updateCache;
};
export default _default;
//# sourceMappingURL=cache.d.ts.map