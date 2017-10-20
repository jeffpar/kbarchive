---
layout: page
title: "Q293098: XWEB: HTTP 404 &quot;Page Cannot Be Found&quot; Accessing OWA Behind Proxy"
permalink: /kb/293/Q293098/
---

## Q293098: XWEB: HTTP 404 &quot;Page Cannot Be Found&quot; Accessing OWA Behind Proxy

{% raw %}

	Article: Q293098
	Product(s): Microsoft Exchange
	Version(s): 2.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Proxy Server version 2.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error when you are trying to access the Outlook
	Web Access (OWA) logon page from a location that is external to your Proxy
	server:
	
	  HTTP 404 Page Cannot Be Found
	
	You are also unable to log on to OWA from inside your network to bypass the Proxy
	server.
	
	CAUSE
	=====
	
	This behavior occurs because OWA and Proxy Server are running on separate
	computers, and you did not configure Web Publishing to send requests to another
	Web server in Proxy Server.
	
	RESOLUTION
	==========
	
	To resolve this behavior, enable Web Publishing to send requests to another Web
	server:
	
	1. Start Internet Service Manager (ISM), which starts the Microsoft Management
	  Console (MMC) Internet Information Server (IIS) snap-in .
	
	2. On the Action menu, click Web Proxy, and then click Properties.
	
	3. On the Publishing tab, click to select the Enable Web Publishing check box.
	
	4. Click "Sent to another web server".
	
	5. Type the internal IP address or the NetBIOS name of the OWA server. You can
	  also use the fully qualified domain name as long as the name can be resolved.
	
	Note: If more than one Web server exists, refer to the articles that are listed
	in the "More Information" section in this article.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q207655 XWEB: Setting Up Web Publishing and OWA Access Through a Proxy
	
	  Q198509 XWEB: 'Unable to Get Your Inbox' Using OWA via Proxy Server
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbAudDeveloper kbExchangeSearch kbExchange550 kbZNotKeyword2 kbProxyServSearch kbOWASearch kbOWA550 kbProxyServ200
	Version           : :2.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
