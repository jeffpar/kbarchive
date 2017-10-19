---
layout: page
title: "Q197890: Cannot Overwrite ISAPI Extensions in Stopped Web Site"
permalink: /kb/197/Q197890/
---

## Q197890: Cannot Overwrite ISAPI Extensions in Stopped Web Site

	Article: Q197890
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Internet Information Server (IIS) 4.0 does not allow you to copy new ISAPI
	extensions over older ISAPI extensions in Web sites even though the Web sites
	are stopped in the Microsoft Management Console (MMC).
	
	CAUSE
	=====
	
	This behavior occurs because the IIS Admin Service is still running and is
	holding a lock on the ISAPI file even though the Web site is stopped.
	
	RESOLUTION
	==========
	
	To stop the IIS Admin Service, follow these steps:
	
	1. Open Control Panel.
	
	2. Double-click Services.
	
	3. Click the IIS Admin Service, and then click Stop.
	
	4. You are presented with a list of services that depend on the IIS Admin
	  Service. Write down all the services listed, and then click OK.
	
	5. After the Service Manager shuts down all the services, click each service
	  that you wrote down in step 4, and then click Start.
	
	6. Click Close.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
