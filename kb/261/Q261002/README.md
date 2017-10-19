---
layout: page
title: "Q261002: How to Move the Default Web Site to a Different Drive in IIS 5.0"
permalink: /kb/261/Q261002/
---

## Q261002: How to Move the Default Web Site to a Different Drive in IIS 5.0

	Article: Q261002
	Product(s): Internet Information Server
	Version(s): winnt:3.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Site Server version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Windows NT Option Pack (NTOP) Setup program to
	install Microsoft Internet Information Server (IIS) 4.0, you can specify a
	location for the Wwwroot directory. However, in Microsoft Internet Information
	Services (IIS) version 5.0, this option is no longer available.
	
	RESOLUTION
	==========
	
	To move the default Web site to a different location, perform the following
	steps:
	
	1. Stop the default Web site.
	
	2. Move the Inetpub/Wwwroot directory to a different location.
	
	3. On the Home Directory tab, modify the default Web site settings to point to
	  the new location.
	
	4. Start the default Web site.
	
	MORE INFORMATION
	================
	
	If you plan to install Microsoft Site Server and you want to move the Wwwroot
	directory to a different location, Microsoft recommends that you make this
	change before you install Site Server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSiteServSearch kbiisSearch kbAudDeveloper kbiis500 kbSiteServ300
	Version           : winnt:3.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
