---
layout: page
title: "Q195179: Cannot Disable HTTP KeepAlives for HTTP/1.1 Clients"
permalink: kb/195/Q195179/
---

## Q195179: Cannot Disable HTTP KeepAlives for HTTP/1.1 Clients

	Article: Q195179
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	HTTP/1.1 client connections are not closed, even if the Allow HTTP KeepAlives
	check box is not selected in the Web site's properties in Microsoft Management
	Console (MMC).
	
	CAUSE
	=====
	
	This behavior occurs because the Allow HTTP KeepAlives check box applies only to
	HTTP/1.0 clients that connect to the IIS server.
	
	RESOLUTION
	==========
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The "Section 8.1.2.1 Negotiation" section of RFC2068 states the following:
	
	  In case the client does not want to maintain a connection for more than
	  that request, it SHOULD send a Connection header including the
	  connection-token close.
	
	Sections 8.1.2.1 and 19.7.1 both discuss backwards compatibility for previous
	HTTP versions and state that persistent connections must be explicitly
	negotiated.
	
	The AllowKeepAlives feature is only valid in the following scenarios:
	
	If you clear the Allow HTTP KeepAlives check box on the server and use an
	HTTP/1.0 client that tries to establish a persistent connection, the server
	sends a close.
	
	If you select the Allow HTTP KeepAlives check box on the server and use an
	HTTP/1.0 client that tries to establish a persistent connection, the server
	honors the request for persistence.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
