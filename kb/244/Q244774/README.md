---
layout: page
title: "Q244774: HTTP Compression Deletes Contents of IIS Temporary Cache Files"
permalink: kb/244/Q244774/
---

## Q244774: HTTP Compression Deletes Contents of IIS Temporary Cache Files

	Article: Q244774
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When HTTP Compression is configured for a maximum temporary folder size and that
	folder size is exceeded, the entire contents of the temporary cache directory
	are deleted and no further documents are cached until the service is restarted.
	
	WORKAROUND
	==========
	
	To work around this problem, create a disk partition of the desired cache size,
	and then change the HTTP compression settings to use that disk. This will cache
	files until the disk partition is full, at which time no more documents will be
	cached.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	version 5.0.
	
	
	Additional query words: iis gzip deflate
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
