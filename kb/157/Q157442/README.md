---
layout: page
title: "Q157442: Cannot Issue Second Allocate from a CPI-C Application"
permalink: /kb/157/Q157442/
---

## Q157442: Cannot Issue Second Allocate from a CPI-C Application

	Article: Q157442
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	CPIC reports CM_PRODUCT_SPECIFIC_ERROR (20) when you try to issue an MC_ALLOCATE
	after you issue a RECEIVE_ALLOCATE and receive a TP_ID. An APPC trace will
	reveal a primary and secondary error codes indicating that the TP_ID is
	incorrect. The following event will be registered in the Application Log:
	
	  Event 3028: Error returned from APPC that does not map to CPI-C error,
	  00000100
	
	CAUSE
	=====
	
	The CPIC library was not handling APPC TP_IDs correctly if an application issues
	a Receive, cmrcv(), and then issues an Allocate, cmallc().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	2.11 Service Pack 1.
	This problem was corrected in the latest Microsoft SNA Server 2.11 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: api sp1 prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
