---
layout: page
title: "Q186810: Event ID 115 When Using Host Headers With IIS"
permalink: kb/186/Q186810/
---

## Q186810: Event ID 115 When Using Host Headers With IIS

	Article: Q186810
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your computer boots or when you manually start the Microsoft Internet
	Information Server service, Event Viewer may log the following event:
	
	  Event ID    : 115
	  Source      : w3svc
	  Description : The service could not bind instance X.
	
	NOTE: "X" is a number that corresponds to one or more of your defined Web sites
	that are using Host Headers.
	
	CAUSE
	=====
	
	Some or all of the Web sites that are using Host Headers have the same port
	number defined for Secure Sockets Layer (SSL). Internet Information Server 4.0
	does not support the use of Host Headers for SSL.
	
	WORKAROUND
	==========
	
	To resolve this issue, perform the following steps:
	
	1. From the Start menu, point to Programs, and point to Windows NT 4.0 Option
	  Pack.
	
	2. Point to Microsoft Internet Information Server and click Internet Service
	  Manager.
	
	  NOTE: Be sure to click Internet Service Manager and not Internet Service
	  Manager (HTML).
	
	3. Expand the Internet Information Server object, expand your server object, and
	  expand the Default Web Site object.
	
	4. Right-click one of your Web sites that is using Host Headers, and then click
	  Properties.
	
	5. Delete the port information in the SSL port field.
	
	6. Click Ok.
	
	7. Repeat steps 4 and 5 for each Web site that is using Host Headers.
	
	NOTE: The above steps will not allow you to use SSL on these Web sites. If you
	need secure communication on Web sites that are configured with host headers,
	you will need to configure each site with a different SSL port number.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
