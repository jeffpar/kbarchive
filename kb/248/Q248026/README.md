---
layout: page
title: "Q248026: HTTP Error 410 - Permanently Not Available"
permalink: /kb/248/Q248026/
---

## Q248026: HTTP Error 410 - Permanently Not Available

	Article: Q248026
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500 kbiis500prod2web kbhttp410 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to a resource on the server the Web browser displays the
	following error:
	
	  HTTP 410 - Permanently not available
	
	CAUSE
	=====
	
	The resource being accessed is not available on the Web server.
	
	This error is reserved for use by the server administrator to let you know that
	the resource that you have requested will no longer be available at the URL
	(Uniform Resource Locator) used. This error should be used in instances where a
	typical "HTTP 404 - Page Not Found" is not entirely correct because it is known
	that the resource will never be available at the specified URL again.
	
	WORKAROUND
	==========
	
	Contact the server administrator to find out the new URL for the resource, if
	one is available.
	
	Additional query words: IIS 5, http 410
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500 kbiis500prod2web kbhttp410 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
