const cacheKey = channel + ":" + thread_ts;
if (CacheService.getScriptCache().get(cacheKey)) {
	return ContentService.createTextOutput("OK").setMimeType(
		ContentService.MimeType.TEXT
	);
} else {
	CacheService.getScriptCache().put(cacheKey, content);
}
