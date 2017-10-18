---
layout: page
title: "Q239044: Removing Application Settings from IISADMIN Causes Error"
permalink: kb/239/Q239044/
---

## Q239044: Removing Application Settings from IISADMIN Causes Error

	Article: Q239044
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Administration Web Site (IISADMIN) properties, if you remove the
	Application Settings (on the Home Directory tab), the site will break and you
	will receive a 500 Server Error.
	
	CAUSE
	=====
	
	The Administration Web Site requires an application to be created.
	
	RESOLUTION
	==========
	
	To correct this problem, perform the following steps:
	
	1. Open the Internet Services Manager (or custom snap-in) and navigate to the
	  Administration Web Site.
	
	2. Right-click the Administration Web Site and then click Properties.
	
	3. Click the Home Directory tab.
	
	4. Under Application Settings, click the Create button.
	
	5. You have now created an application for the site.
	
	6. Click OK.
	
	Be sure to test the site to ensure that it is working correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	version 5.0.
	
	Additional query words: iis Administration Web Site Application 500
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
