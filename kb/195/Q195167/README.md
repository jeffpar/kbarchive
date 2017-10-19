---
layout: page
title: "Q195167: SLI Application Fails with LUA_DATA_SEG_LENGTH_ERROR"
permalink: /kb/195/Q195167/
---

## Q195167: SLI Application Fails with LUA_DATA_SEG_LENGTH_ERROR

	Article: Q195167
	Product(s): Microsoft SNA Server
	Version(s): 2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA applications using the LUA SLI (Session Level Interface) API may randomly
	fail, and require that SNA Server be stopped and restarted before the
	application can recover.
	
	When the problem occurs, an SLI_SEND verb will fail with a primary return of
	LUA_PARAMETER_CHECK, and a secondary return code of LUA_DATA_SEG_LENGTH_ERROR,
	even though the data length is correct.
	
	CAUSE
	=====
	
	A problem in the SNA Server SLI library when calculating the extent of an array
	caused a validity check for the data segment length parameter of an SLI_SEND
	verb to return false.
	
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
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 2.11, SNA Server 2.11
	Service Pack 1, SNA Server 2.11 Service Pack 2, SNA Server 3.0, SNA Server 3.0
	Service Pack 1, SNA Server 3.0 Service Pack 2, SNA Server 3.0 Service Pack 3,
	SNA Server 4.0, and SNA Server 4.0 Service Pack 1. This problem was first
	corrected in SNA Server 3.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
