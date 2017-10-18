---
layout: page
title: "Q314611: Error Message: HTTP Error 500-12 (Application Restarting)"
permalink: kb/314/Q314611/
---

## Q314611: Error Message: HTTP Error 500-12 (Application Restarting)

	Article: Q314611
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 08-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run reports on the Web Reporting tool or use any function that requires
	multiple frames, you may receive the following error message:
	
	  HTTP Error 500-12 (Application Restarting)
	
	CAUSE
	=====
	
	This problem may be caused if antivirus software is running on the IIS
	subfolders.
	
	RESOLUTION
	==========
	
	To work around this problem, stop the virus-scanning program, or configure the
	program to ignore the IIS folder. By default, the IIS folder is \Inetpub.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	For additional information about related topics, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q248013 Err Msg: HTTP Error 500-12 Application Restarting
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
