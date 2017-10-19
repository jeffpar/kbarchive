---
layout: page
title: "Q248641: Clients Cannot Browse Through Proxy Server with Demand Dial"
permalink: /kb/248/Q248641/
---

## Q248641: Clients Cannot Browse Through Proxy Server with Demand Dial

	Article: Q248641
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Proxy Server version 1.0 
	- Microsoft BackOffice Small Business Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use a Microsoft Windows NT Workstation 4.0-based client to
	browse by using a demand dial interface through a proxy server, you may not
	succeed. Also, you may not be able to terminate the demand dialing feature from
	a client although auto-dial configuration and Internet connections on the
	clients are all correct. When the demand dial interface terminates
	automatically, all clients are able to browse.
	
	CAUSE
	=====
	
	This behavior can occur when the proxy settings on the Small Business Server
	(SBS) and on the client's Internet Explorer (IE) are incorrect.
	
	RESOLUTION
	==========
	
	To resolve this behavior, disable Winsock proxy client at the SBS and then
	enable IE Internet options for the proxy server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbAudDeveloper kbProxyServ100 kbProxyServSearch kbSBServSearch kbSBServ400
	Version           : winnt:1.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
