---
layout: page
title: "Q170996: SNA Server Fails to Send Data to DSPU After an Outage"
permalink: /kb/170/Q170996/
---

## Q170996: SNA Server Fails to Send Data to DSPU After an Outage

	Article: Q170996
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP2,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP2, 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under certain circumstances, like a link outage between SNA Server and a
	Downstream System, SNA Server may fail to send host data to the downstream
	System on the SSCP-LU session. Sessions or applications on the downstream system
	then seem to hang, waiting for data.
	
	CAUSE
	=====
	
	We recently introduced a queue within the SNA Server service to ensure that
	requests from the Host on the LU-SSCP session were handled serially.
	Unfortunately in one case this queue is not cleared. The particular case is when
	the SNA Server service receives a request from the host when the downstream
	session or application is not ready to receive data. The EXR or -RSP generated
	was not routed through the DFC layer (where the queue was managed).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 Service
	Pack 2, 3.0 and 3.0 Service Pack 1. A fix to this problem is in development, but
	has not been regression-tested and may be destabilizing in production
	environments.
	
	Microsoft does not recommend implementing this fix at this time. Contact
	Microsoft Product Support Services for more information on the availability of
	this fix.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP2,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
