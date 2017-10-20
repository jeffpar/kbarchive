---
layout: page
title: "Q241428: HTTP Compression Does Not Compress Office Documents"
permalink: /kb/241/Q241428/
---

## Q241428: HTTP Compression Does Not Compress Office Documents

{% raw %}

	Article: Q241428
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	HTTP Compression in Internet Information Services (IIS) version 5.0 does not
	compress Microsoft Office documents.
	
	CAUSE
	=====
	
	By default, HTTP Compression for static documents is configured to only compress
	files with the following extensions:
	
	  .htm
	  .html
	  .txt
	
	RESOLUTION
	==========
	
	HTTP Compression can be configured to include additional document types by
	modifying the metabase settings for the HTTP Compression filter using ADSI
	scripts or similar tools. More details are outlined in the following Knowledge
	Base article:
	
	  Q234497 How to Specify Additional Document Types for HTTP Compression
	
	Additional query words: iis gzip deflate
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
