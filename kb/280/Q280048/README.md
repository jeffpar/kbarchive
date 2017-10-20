---
layout: page
title: "Q280048: Delete Option Is Unavailable When Trying to Remove Admin Web Sit"
permalink: /kb/280/Q280048/
---

## Q280048: Delete Option Is Unavailable When Trying to Remove Admin Web Sit

{% raw %}

	Article: Q280048
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 01-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you right-click the Administration Web site in the Microsoft Management
	Console (MMC), the Delete option is not available.
	
	CAUSE
	=====
	
	The site is configured with a metabase property, which prevents the Delete
	option from being displayed in the MMC.
	
	RESOLUTION
	==========
	
	To remove the Administration Web site, do the following:
	
	In IIS 4.0:
	
	1. Click Start, click Programs, click Windows NT 4.0 Option Pack, and then
	  select Windows NT 4.0 Option Pack Setup.
	
	2. Click Next, then click Add/Remove.
	
	3. Click to highlight Internet Information Server (IIS).
	
	4. Click Show Subcomponents, and then click to uncheck Internet Server Manager
	  (HTML).
	
	5. Click OK, click Next, and then click Finish.
	
	In IIS 5.0:
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. Click Add/Remove Windows Components, and then click Components.
	
	3. Click to highlight Internet Information Services (IIS), and then click
	  Details.
	
	4. Click to uncheck Internet Services Manager (HTML), click OK, click Next, and
	  then click Finish.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: iis, mmc, adminstration web site, delete, metabase
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
