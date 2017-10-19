---
layout: page
title: "Q304637: IIS: Problems Using SSL with AuthentiX ISAPI Filter"
permalink: /kb/304/Q304637/
---

## Q304637: IIS: Problems Using SSL with AuthentiX ISAPI Filter

	Article: Q304637
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are browsing with Microsoft Internet Explorer version 5.0 or later and
	you have Secure Sockets Layer (SSL) enabled while you are using a Flicks
	Software AuthentiX Internet Server API (ISAPI) filter, you may receive the
	following error message:
	
	  Page Cannot Be Displayed
	
	CAUSE
	=====
	
	Normally AuthentiX sends a Pragma: no-cache header with each file that is served
	in a cookie-protected folder; if you have cookie timeouts set, this ensures that
	a page is not cached in the browser and is not available for viewing after the
	timeout has expired. When you attempt to download a file with SSL and Internet
	Explorer, the Pragma: no-cache header causes an error.
	
	NOTE: With SSL, the default setting for all browsers is not to cache pages from
	SSL encrypted sites, so the Pragma: no-cache header is unnecessary.
	
	WORKAROUND
	==========
	
	To turn off Pragma: no-cache headers, follow these steps:
	
	1. In the registry, add the following REG_DWORD value with the name
	  CookieStopNoCache. Set its value to 1 to stop the Pragma: no-cache headers.
	
	  HKEY_LOCAL_MACHINE/Software/Flicks Software/AuthentiX/1.0/AuthentiXConfig
	
	NOTE: If you want to stop the Cache-Control: private header, use
	CookieStopPrivate. If you want to stop Expires: 0, use CookieStopExpires.
	
	2. Use Control Panel to stop and restart the IIS Admin Service (if you are
	  running IIS versions 4.0 or 5.0) or the World Wide Web Publishing Service (if
	  you are running IIS 3.0).
	
	REFERENCES
	==========
	
	For more information, see the following Web site:
	
	  http://www.flicks.com/prod.htm#authnx
	
	Additional query words: kbiisSearch, iis 5, AuthentiX, SSL
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : :3.0,4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
