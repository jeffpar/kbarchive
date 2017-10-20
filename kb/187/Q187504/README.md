---
layout: page
title: "Q187504: HTTP 1.1 Host Headers Are Not Supported When You Use SSL"
permalink: /kb/187/Q187504/
---

## Q187504: HTTP 1.1 Host Headers Are Not Supported When You Use SSL

{% raw %}

	Article: Q187504
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 23-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Secure Sockets Layer (SSL), HTTP 1.1 host headers do not function.
	
	CAUSE
	=====
	
	This behavior occurs because host headers are included in the encrypted request.
	Note that this is not a limitation of IIS, and the HTTP data is still encrypted.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When a Web server is configured to use SSL, Internet Information Server (IIS)
	must determine which certificate to use. IIS 4.0 and IIS 5.0 support multiple
	Web servers on a single server, so it is possible to have multiple certificates
	loaded. Only one certificate is used with a specific Web server.
	
	A server can use IIS 4.0 and IIS 5.0 to host multiple Web sites, and this is
	possible by using any of the following methods:
	
	- By using different IP addresses, but the same port number.
	
	- By using the same IP address, but different port numbers.
	
	- By using the same IP address and port number, but using HTTP 1.1 host
	  headers.
	
	A server can use host headers to determine which Web server to use if the IP
	address or port number are the same and are part of the HTTP 1.1 protocol. This
	information is included as part of the request header that is sent by the
	browser to the server.
	
	When a request comes to the server by using SSL, IIS looks in its configuration
	store to determine which certificate to use. This is accomplished by completing
	a lookup on the IP/port combination. Under the following conditions, the typical
	progression of events is to view the host header to determine which Web server
	to use:
	
	- There are multiple Web servers on a computer that are all assigned the same
	  IP address and port number.
	
	- The computer is configured to use host headers.
	
	However, the client request is still encrypted by using SSL. Because of this, the
	header is encrypted, and IIS cannot determine which server certificate to use or
	which Web server to communicate with.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
