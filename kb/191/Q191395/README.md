---
layout: page
title: "Q191395: SNA Client APPC and RUI/SLI Applications May Seem Slow"
permalink: kb/191/Q191395/
---

## Q191395: SNA Client APPC and RUI/SLI Applications May Seem Slow

	Article: Q191395
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under some circumstances, an APPC or RUI application running on an SNA Server
	Windows NT client may appear to return data slowly. Data meant for the client is
	returned in normal fashion, but the SNA client's DMOD (part of the client server
	interface) is not sending this data to the application in a timely manner.
	
	NOTE: This does not occur with the SNA Server client for Windows NT versions
	prior to SNA Server 3.0 SP3.
	
	
	CAUSE
	=====
	
	A rampipe thread semaphore was being overwritten when multiple initializations
	of the DMOD through RUI and APPC were made.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 4.0 SP1.
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 SP3,
	4.0, and 4.0 SP1. This problem was first corrected in SNA Server 3.0 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ400SP1
	Version           : :3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
