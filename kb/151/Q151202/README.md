---
layout: page
title: "Q151202: TN3270E May Experience Unexpected Application Exception Errors"
permalink: kb/151/Q151202/
---

## Q151202: TN3270E May Experience Unexpected Application Exception Errors

	Article: Q151202
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server 2.11 Service Pack 1 Tn3270E Server may experience intermittent
	and random access violations.
	
	If this occurs, the SNA Server TN3270E service will log the following event in
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
	
	The TN3270E Server user license validation routine was accessing the global
	queue of session control blocks without using a critical section to serialize
	access to the queue. This leaves a chance that while it is accessing a control
	block that control block could be deleted by another thread.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.11 and 2.11.sp1. A fix to this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments. Microsoft
	does not recommend implementing this fix at this time. Contact Microsoft Product
	Support Services for more information on the availability of this fix.
	
	Additional query words: prodsna tn3270
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	
	=============================================================================
	
