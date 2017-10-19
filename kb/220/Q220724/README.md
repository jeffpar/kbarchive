---
layout: page
title: "Q220724: Name Change of an IIS 5.0 Application Restarts the Application"
permalink: /kb/220/Q220724/
---

## Q220724: Name Change of an IIS 5.0 Application Restarts the Application

	Article: Q220724
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
	
	Changing the name of an application in Internet information Services 5.0 causes
	the application to restart. This can cause problems for users that are currently
	using the application.
	
	CAUSE
	=====
	
	When the application is renamed, all users currently logged on to the
	application are effected because the URL is changed.
	
	WORKAROUND
	==========
	
	In order for the name change to be "graceful," restarting the application itself
	(thereby purging the cache, and so on) seems to be the best way to address this
	issue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
