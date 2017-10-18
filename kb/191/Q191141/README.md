---
layout: page
title: "Q191141: Internet Service Manager (HTML) Returns HTTP Error 403"
permalink: kb/191/Q191141/
---

## Q191141: Internet Service Manager (HTML) Returns HTTP Error 403

	Article: Q191141
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	If you try to access the Internet Service Manager (HTML) from a Web browser that
	does not reside on the Web server itself, you may receive the following error
	message:
	
	  HTTP Error 403 - Access to Internet Service Manager (HTML) is
	  restricted to Localhost
	
	  403.6 Forbidden: IP address rejected
	
	CAUSE
	=====
	
	This error is caused by the default security settings for the Internet Service
	Manager (HTML). In order to ensure that the site is not inadvertently exposed to
	an attack, the HTML Administrator is set to only allow the local IP address
	(127.0.0.1) access to it.
	
	WORKAROUND
	==========
	
	To change the security settings, perform the following steps:
	
	1. Open the Internet Service Manager and click the Directory Security tab.
	
	2. Click the Edit button next to the IP Address and Domain Name Restrictions
	  heading.
	
	3. Choose the IP address, group of IP addresses, or domain names that you want
	  to have access to the HTML Internet Service Manager.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
