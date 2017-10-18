---
layout: page
title: "Q248061: Err Msg: HTTP 414 - Request - URI Too Long"
permalink: kb/248/Q248061/
---

## Q248061: Err Msg: HTTP 414 - Request - URI Too Long

	Article: Q248061
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to Internet Information Services (IIS) through a browser, you
	may receive the following error message:
	
	  HTTP 414 - Request - URI Too Long
	
	CAUSE
	=====
	
	The server is refusing to service the request because the Request-URI is too
	long. This rare condition is likely to occur in the following situations:
	
	- A client has improperly converted a POST request to a GET request with long
	  query information.
	
	- A client has encountered a redirection problem (for example, a redirected URL
	  prefix that points to a suffix of itself).
	
	- The server is under attack by a client attempting to exploit security holes
	  present in some servers that use fixed-length buffers to read or manipulate
	  the Request-URI.
	
	IIS checks the string length of the URI and does not service a request when the
	URI is longer than expected. This is by design.
	
	Additional query words: IIS 5
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
