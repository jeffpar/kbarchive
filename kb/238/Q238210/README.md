---
layout: page
title: "Q238210: HTTP Keep Alive Header Sent Whenever ASP Buffering is Enabled"
permalink: kb/238/Q238210/
---

## Q238210: HTTP Keep Alive Header Sent Whenever ASP Buffering is Enabled

	Article: Q238210
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Whenever ASP Buffering is enabled, either through the Microsoft Management
	Console (MMC) or programmatically in the Active Server Pages (ASP) page
	(response.buffer=true), an HTTP Keep-Alive header will be sent along with the
	Content-Length.
	
	CAUSE
	=====
	
	This is by design.
	
	WORKAROUND
	==========
	
	The header can be disabled by adding the following code to the top of the ASP
	pages:
	
	  <%response.flush%>
	
	MORE INFORMATION
	================
	
	This behavior occurs even if Keep-Alives are disabled in the MMC. The Keep-Alive
	will be ignored by HTTP 1.0 (browser) clients. HTTP 1.0 Proxies will require the
	Content-Length header to also be present. This is transmitted by default but
	could be modified by an Internet server application programming interface
	(ISAPI) filter. If a filter is used and the Content-Length is not sent, then you
	will have to implement the workaround described above.
	
	Additional query words: Keep-Alive, IIS, Header, ISAPI, Content-Length, keep alive, content length
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
