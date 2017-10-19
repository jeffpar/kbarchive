---
layout: page
title: "Q234923: Err Msg: HTTP/1.1 501 Not Supported"
permalink: /kb/234/Q234923/
---

## Q234923: Err Msg: HTTP/1.1 501 Not Supported

	Article: Q234923
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp501 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to download a file from a server running IIS, the following
	error message occurs:
	
	  HTTP/1.1 501 Not Supported
	
	CAUSE
	=====
	
	This is by design. IIS does not serve files larger than 4 gigabytes (GB).
	
	WORKAROUND
	==========
	
	Individual files greater than 4 GB can often be compressed using third-party
	utilities to reduce the file size for downloading.
	
	Additional query words: iis
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp501 kbProd2Web 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
