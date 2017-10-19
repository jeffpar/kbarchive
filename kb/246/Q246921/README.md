---
layout: page
title: "Q246921: HTTP 204 Response Returns Message-Body to Client"
permalink: /kb/246/Q246921/
---

## Q246921: HTTP 204 Response Returns Message-Body to Client

	Article: Q246921
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse an empty Active Server Pages (ASP) page, a message body is
	returned in addition to a 204 response.
	
	CAUSE
	=====
	
	This is by design. IIS usually returns "friendly" HTTP responses with error
	codes. However, in the case of a "204 No Content" error message, this is
	different from the HTTP/1.1 specification detailed in the Request For Comment
	(RFC) number 2616 as follows:
	
	  "The 204 response MUST NOT include a message-body, and thus is always
	  terminated by the first empty line after the header fields."
	
	WORKAROUND
	==========
	
	When an empty page needs to be returned to client, use an empty text or HTML
	file (for example Empty.txt, Empty.htm, and so on).
	
	MORE INFORMATION
	================
	
	For more information on this topic, please see section 10.2.5 of the HTTP/1.1
	specification in RFC 2616 at the following URL:
	
	  http://www.w3.org/Protocols/rfc2616/rfc2616.html
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
