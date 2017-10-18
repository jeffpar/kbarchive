---
layout: page
title: "Q164086: Err Msg: http/1.0 500 server error (-2146893048) with Proxy"
permalink: kb/164/Q164086/
---

## Q164086: Err Msg: http/1.0 500 server error (-2146893048) with Proxy

	Article: Q164086
	Product(s): Internet Information Server
	Version(s): WINNT: 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to view a secure web site from your Microsoft Internet Explorer
	version 3.01 and earlier, you may get the following error message:
	
	  http/1.0 500 server error (-2146893048)
	
	CAUSE
	=====
	
	A problem exists with Windows NT Challenge/Response authentication of the Web
	Proxy clients.
	
	
	WORKAROUND
	==========
	
	Use one of the following methods:
	
	Methods One
	-----------
	
	1. Make sure all clients are using Internet Explorer version 3.01 or later.
	
	2. Install Service Pack 2 for Microsoft Windows NT version 4.0 on the proxy
	  server.
	
	3. Install the Winsock Proxy client program on the client computers.
	
	4. In the Internet Explorer Proxy settings, type the name of the proxy server
	  for all protocols EXCEPT Secure. This will force the browser to use the
	  Winsock Proxy service instead of the Web Proxy service when you try to
	  connect to a SSL (secure) page.
	
	  All other browser requests will use the Web Proxy service and still take
	  advantage of caching. This method will allow the use of Windows NT Challenge
	  for all protocols because the Winsock Proxy has its own Windows NT Challenge
	  authentication built-in.
	
	Method Two
	----------
	
	Disable Windows NT Challenge/Response and enable Basic Authentication.
	
	Method Three
	------------
	
	Install the Winsock Proxy Client and disable the Proxy connection settings on the
	Internet Explorer clients. All clients will use the Winsock Proxy service only.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following Microsoft Knowledge Base
	article:
	
	  Q162945 : Error Message: HTTP/1.0 500 Server Error (-2146893048)
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis100
	Version           : WINNT: 1.0
	Issue type        : kbprb
	
	=============================================================================
	
