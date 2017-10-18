---
layout: page
title: "Q285856: Event 705 Logged with Client Computer Name &quot;UNKNOWN&quot;"
permalink: kb/285/Q285856/
---

## Q285856: Event 705 Logged with Client Computer Name &quot;UNKNOWN&quot;

	Article: Q285856
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000
	Last Modified: 12-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer that is running Host Integration Server, the SnaBase Service logs
	the following event whenever a client/server or Distributed Link Service
	connection fails due to security violations:
	
	  Event ID: 705
	  Source: SNA Base Service
	  Description: Logon Failed.
	  EXPLANATION
	  Access denied on client-server or Distributed Link Service connection
	  request.
	
	  Unknown user name or bad password from client UNKNOWN --- Error Code : 4097
	
	  ACTION
	  Contact your network support personnel.
	
	CAUSE
	=====
	
	Host Integration Server 2000 incorrectly logs the client computer name as
	"UNKNOWN" for all instances of this event. The event should reflect the actual
	computer name of the client system. UNKNOWN should only be used if the actual
	machine name cannot be determined.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	
	Additional query words: HIS DLS
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
