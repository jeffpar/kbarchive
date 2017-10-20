---
layout: page
title: "Q151628: TN3270E May Get Unexpected Application Exception Violations"
permalink: /kb/151/Q151628/
---

## Q151628: TN3270E May Get Unexpected Application Exception Violations

{% raw %}

	Article: Q151628
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server 2.11 Service Pack 1 Tn3270E Server may experience access
	violations when more than two thousand clients are connected to the TN3270
	Server.
	
	If this occurs, the SNA Server TN3270E service will log the following event into
	the Microsoft Windows NT application event log:
	
	  Event Id:5
	
	  The TN3270E Service has abnormally terminated.
	
	  EXPLANATION
	  An exception (0xC0000005) has occurred that has caused the TN3270E
	  Service to terminate.
	
	  ACTION
	  Record message and contact technical support.
	
	CAUSE
	=====
	
	The TN3270E Server will start to write beyond the bounds of one of its arrays
	when more than 2000 users are connected to the server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server for Windows
	NT versions 2.11 and 2.11.sp1. A fix to this problem is in development, but has
	not been regression-tested and may be destabilizing in production environments.
	Microsoft does not recommend implementing this fix at this time. Contact
	Microsoft Product Support Services for more information on the availability of
	this fix.
	
	Additional query words: 2.11 tn3270
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
