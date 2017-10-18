---
layout: page
title: "Q291279: No Log File Created When There Is No Activity on a Web Site"
permalink: kb/291/Q291279/
---

## Q291279: No Log File Created When There Is No Activity on a Web Site

	Article: Q291279
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If there is no client activity on a Web site during the amount of time that you
	specified as the logging period in the Web site properties, IIS does not create
	a log file for that time period. For example, if you set logging to occur on a
	daily basis, and there are no client requests made to that server during a
	24-hour period, no log file is created.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: IIS log logging iis4 iis5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	Solution Type     : kbpending
	
	=============================================================================
	
