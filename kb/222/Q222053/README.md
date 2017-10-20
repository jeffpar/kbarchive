---
layout: page
title: "Q222053: RAS May Not Answer After Proxy Autodisconnects"
permalink: /kb/222/Q222053/
---

## Q222053: RAS May Not Answer After Proxy Autodisconnects

{% raw %}

	Article: Q222053
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,2.0,4.0,4.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server versions 4.0, 4.5 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Proxy Server versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The remote access server may stop answering incoming calls.
	
	
	CAUSE
	=====
	
	The problem occurs on servers running both Microsoft Proxy Server and Remote
	Access Service. If the Proxy Server initiates an AutoDial connection to the
	Internet using a RAS phone book entry at the request of the Winsock Proxy
	Service, and that session is later autodisconnected by the Proxy Server because
	of lack of activity, the modem that was used for the Proxy connection may not
	answer incoming RAS calls. After Proxy disconnects the session, the Winsock
	Proxy Service may not return the port to RAS.
	
	The problem does not occur if the Proxy AutoDial connection was initiated by the
	Web Proxy service.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Stop and restart the Remote Access Service.
	
	- Use Dial-Up Networking on the server to initiate a connection through the
	  affected modem. It is not necessary to actually connect to a remote network.
	  It is only necessary to have RAS dial out on the affected modem port. After
	  RAS initializes the port, you can hang up the connection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400 kbAudDeveloper kbBackOfficeSearch kbProxyServ100 kbProxyServSearch kbBackOfficeServ400 kbBackOfficeServ450 kbProxyServ200
	Version           : winnt:1.0,2.0,4.0,4.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
