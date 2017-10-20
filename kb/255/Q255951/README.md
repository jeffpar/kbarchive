---
layout: page
title: "Q255951: HTTP Compression Methods and Files Used by IIS 5.0"
permalink: /kb/255/Q255951/
---

## Q255951: HTTP Compression Methods and Files Used by IIS 5.0

{% raw %}

	Article: Q255951
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, Internet Information Services (IIS) 5.0 uses the GZip and Deflate
	HTTP compression methods. Both compression methods are implemented through an
	ISAPI filter.
	
	MORE INFORMATION
	================
	
	ISAPI Filter:
	
	HTTP compression is a subservice of IIS, which is handled through an ISAPI
	filter. Because this filter is installed at the WWW Service level, compression
	must be configured for the entire Web server. It cannot be configured for a
	specific Web site. The following two files handle this compression (located in
	the %WinDir%\System32\INETSERV folder):
	
	- CompFilt.dll
	- GZIP.dll
	
	Compression Methods:
	
	- GZIP file format specification - RFC 1952
	- DEFLATE Compressed Data Format Specification - RFC 1951
	
	Note: To look up an RFC, see http://www.ietf.org
	
	For more information on enabling HTTP compression, review the Internet
	Information Services documentation.
	
	Additional query words: iis 5 akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
