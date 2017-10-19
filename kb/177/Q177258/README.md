---
layout: page
title: "Q177258: WWW Service Stops Responding When You Stop Web Site in MMC"
permalink: /kb/177/Q177258/
---

## Q177258: WWW Service Stops Responding When You Stop Web Site in MMC

	Article: Q177258
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an Out-of-Process (OOP) application stops responding, and you attempt to stop
	the Web site by using the Microsoft Management Console (MMC), the WWW service
	may stop responding.
	
	CAUSE
	=====
	
	When OOP applications stops responding, Internet Information Server (IIS)
	generates internal schedule requests to clean up its private operating
	environment. Because this operation has been scheduled, an attempt to stop IIS
	from the MMC may force the service to lock itself so that this request can be
	completed.
	
	RESOLUTION
	==========
	
	After an OOP application failure, the WWW service can be stopped by issuing a
	"net stop w3svc" command without first using the MMC. However, once the WWW
	service has been stopped from the MMC, issuing the "net stop w3svc" or "net stop
	iisadmin /y" commands will not stop the server. The following errors may
	appear:
	
	  No longer accepting requests at this time. Incontrollable state.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 4.0.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
