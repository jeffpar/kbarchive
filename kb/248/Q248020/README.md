---
layout: page
title: "Q248020: IIS 5.0: Err Msg &quot;HTTP/1.1 407 Proxy Authentication Required&quot;"
permalink: /kb/248/Q248020/
---

## Q248020: IIS 5.0: Err Msg &quot;HTTP/1.1 407 Proxy Authentication Required&quot;

	Article: Q248020
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500 kbiis500prod2web kbhttp407 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Web site through proxy server, the following
	error may appear:
	
	  HTTP/1.1
	  407 Proxy Authentication Required
	
	  You must authenticate with a proxy server before this request can be
	  serviced.
	  Please logon to your proxy server and then try again.
	
	CAUSE
	=====
	
	This error is returned when you try to access a Web site through a proxy server
	that has access control turned on while using Basic Authentication.
	
	The Web Proxy, through a 407 HTTP response, requests credentials from the browser
	client (or downstream Proxy Server). The client provides the credentials, or in
	the case of a downstream Web proxy, the proxy server may provide the credentials
	itself.
	
	If the credentials used by the client or by the downstream proxy server are not
	allowed by the upstream proxy server, this error will be displayed.
	
	RESOLUTION
	==========
	
	This can be resolved by passing the correct credentials to the proxy server.
	Contact the administrator of the proxy server and verify that the account has
	permission to use the proxy server.
	
	WORKAROUND
	==========
	
	You can also use the following workaround to resolve this issue:
	
	- Enable "Anonymous" authentication on the proxy server computer.
	
	Additional query words: IIS 5 HTTP/1.1 407
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500 kbiis500prod2web kbhttp407 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
