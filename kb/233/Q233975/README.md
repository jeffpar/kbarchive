---
layout: page
title: "Q233975: Err Msg: The Requested Service Has Already Been Started"
permalink: /kb/233/Q233975/
---

## Q233975: Err Msg: The Requested Service Has Already Been Started

	Article: Q233975
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are batch-processing or scheduling the rapid start and stop of
	Microsoft Internet Information Server (IIS) services, the services may appear to
	stop responding in an uncontrollable state. When you try to start the IIS
	services, the following error message occurs:
	
	  The requested service has already been started.
	  More help is available by typing NET HELPMSG 2182.
	
	Attempting to stop the IIS services returns the following error message:
	
	  The IIS Admin Service service is not started.
	  More help is available by typing NET HELPMSG 3521.
	
	CAUSE
	=====
	
	This is caused by attempting to start or stop the IIS services while another
	start or stop command is still processing for IIS.
	
	RESOLUTION
	==========
	
	When this condition occurs, stop all batch-processing or scheduled operations
	until the Service Control Manager has had ample time to clear all processing.
	You should then be able to start or stop the IISADMIN service.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
