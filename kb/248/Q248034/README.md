---
layout: page
title: "Q248034: IIS Error: 404.1 Web Site Not Found"
permalink: /kb/248/Q248034/
---

## Q248034: IIS Error: 404.1 Web Site Not Found

	Article: Q248034
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500 kbiis500prod2web kbhttp4041 kbProd2Web
	Last Modified: 08-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to connect to an Microsoft Internet Information Services (IIS)
	Web server, you may see the following error:
	
	  The Web site cannot be found.
	
	  The Web site you are looking for is unavailable due to its identification
	  configuration settings.
	
	  HTTP 404.1 - Web site not found
	  Internet Information Services
	
	CAUSE
	=====
	
	This error indicates that the Web site you are trying to access has an IP
	address that does not accept requests for the port on which this request came.
	
	RESOLUTION
	==========
	
	Verify that you have the correct site name or IP address for the server. If you
	do have the correct information, ask the site administrator to check the
	following:
	
	1. From the Internet Services Manager, open the properties for the Web site in
	  question.
	
	2. Under the Web Site tab, verify that the correct IP address and port are
	  listed in the Web Server's Web Site Identification.
	
	3. If multiple Identities are listed, attempt to connect using one of the
	  identities listed and/or remove the extra identities from the site.
	
	Additional query words: IIS 5
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500 kbiis500prod2web kbhttp4041 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	
