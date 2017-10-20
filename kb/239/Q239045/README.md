---
layout: page
title: "Q239045: IIS: Receives a &quot;500 Server Error&quot; Accessing the Admin Web Site"
permalink: /kb/239/Q239045/
---

## Q239045: IIS: Receives a &quot;500 Server Error&quot; Accessing the Admin Web Site

{% raw %}

	Article: Q239045
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500 kbiis500prod2web kbhttp500 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When accessing the Administration Web Site (IISADMIN) that is set up in Internet
	Information Services 5.0, you may receive the following error message:
	
	  500 Server Error.
	
	CAUSE
	=====
	
	This can occur when the application has been removed from the Web site. This
	site will require the use of an application.
	
	RESOLUTION
	==========
	
	In order to correct this problem, perform the following steps:
	
	1. Open the Internet Services Manager MMC (or custom snap-in) and navigate to
	  the Administration Web Site.
	
	2. Right-click on the Administration Web Site and then click on Properties.
	
	3. Click the Home Directory tab, and look at the settings under Application
	  Settings.
	
	4. Click Create.
	
	5. You have now created an application for the site.
	
	6. Click OK.
	
	Be sure to test the site to make sure that it is working correctly.
	
	Additional query words: iis Administration Web 500
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500 kbiis500prod2web kbhttp500 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
