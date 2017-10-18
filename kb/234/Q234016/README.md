---
layout: page
title: "Q234016: ASP May Improperly Parse Cookies Containing a Plus Sign"
permalink: kb/234/Q234016/
---

## Q234016: ASP May Improperly Parse Cookies Containing a Plus Sign

	Article: Q234016
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a client-side cookie is written from a browser with JavaScript that contains
	a plus sign (+) in the string, IIS 4.0 returns the space character " " instead
	of the plus sign (+), as stored in the cookie.
	
	CAUSE
	=====
	
	This is by design.
	
	WORKAROUND
	==========
	
	It is recommended that any script requiring non-standard characters use URL
	style encoding (RFC 1738) for cookie handling, including the plus sign (+). The
	workaround is to use an escaped plus sign or space when you create cookies using
	client-side scripts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
