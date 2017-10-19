---
layout: page
title: "Q160452: NVAlert Service Logs Event 3006 and Stops Responding"
permalink: /kb/160/Q160452/
---

## Q160452: NVAlert Service Logs Event 3006 and Stops Responding

	Article: Q160452
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the NVAlert service encounters data for a configured event that exceeds 4 KB
	in size, the NVAlert service may stop responding. The following event is logged
	when this problem occurs:
	
	  Event ID: 3006
	  Source: SNA Netview Alerter
	  Type: error
	  Description : Error reading log event record.Handle specified is
	  <handle>.
	  Return Code from ReadEventLog is 122.
	
	CAUSE
	=====
	
	The NVAlert service is not properly allocating memory large enough to handle an
	alert that exceeds 4 KB.
	
	RESOLUTION
	==========
	
	The NVALERT code has been modified to allow any size Event Log entry. If the
	current buffer size is not large enough, it is increased to accommodate the
	size.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.0, 2.1,
	2.11, 2.11 SP1, and 3.0.
	This problem was corrected in the latest Microsoft SNA Server 2.11 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna 2.00 2.11 3.00 2.10
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
