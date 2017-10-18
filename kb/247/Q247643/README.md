---
layout: page
title: "Q247643: HTTP/1.1 Error 501 - Not Implemented"
permalink: kb/247/Q247643/
---

## Q247643: HTTP/1.1 Error 501 - Not Implemented

	Article: Q247643
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp501 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use an unknown method from an Internet client, the following
	error message occurs:
	
	  HTTP/1.1 501 Not Implemented
	
	CAUSE
	=====
	
	This behavior is by design. Internet Information Services (IIS) only supports
	the methods defined in "RFC 2616 - Hypertext Transfer Protocol -- HTTP/1.1" and
	"RFC 2518 - HTTP Extensions for Distributed Authoring -- WEBDAV." The methods
	are listed in the following table:
	
	  
	  +---------------------------------------+
	  | Method    | Protocol | RFC  | Section | 
	  +---------------------------------------+
	  | CONNECT   | HTTP     | 2616 | 9.9     | 
	  +---------------------------------------+
	  | COPY      | WEBDAV   | 2518 | 8.8     | 
	  +---------------------------------------+
	  | DELETE    | HTTP     | 2616 | 9.7     | 
	  +---------------------------------------+
	  | GET       | HTTP     | 2616 | 9.3     | 
	  +---------------------------------------+
	  | HEAD      | HTTP     | 2616 | 9.4     | 
	  +---------------------------------------+
	  | LOCK      | WEBDAV   | 2518 | 8.10    | 
	  +---------------------------------------+
	  | MKCOL     | WEBDAV   | 2518 | 8.1     | 
	  +---------------------------------------+
	  | MOVE      | WEBDAV   | 2518 | 8.9     | 
	  +---------------------------------------+
	  | OPTIONS   | HTTP     | 2616 | 9.2     | 
	  +---------------------------------------+
	  | POST      | HTTP     | 2616 | 9.5     | 
	  +---------------------------------------+
	  | PROPFIND  | WEBDAV   | 2518 | 8.1     | 
	  +---------------------------------------+
	  | PROPPATCH | WEBDAV   | 2518 | 8.2     | 
	  +---------------------------------------+
	  | PUT       | HTTP     | 2616 | 9.6     | 
	  +---------------------------------------+
	  | TRACE     | HTTP     | 2616 | 9.8     | 
	  +---------------------------------------+
	  | UNLOCK    | WEBDAV   | 2518 | 8.11    | 
	  +---------------------------------------+
	
	MORE INFORMATION
	================
	
	For more information on these topics, please see the information at the
	following:
	
	- RFC 2616 - Hypertext Transfer Protocol -- HTTP/1.1
	- RFC 2518 - HTTP Extensions for Distributed Authoring -- WEBDAV
	
	Additional query words: prod2web
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp501 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
