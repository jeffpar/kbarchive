---
layout: page
title: "Q188991: 5250 Print Session May Be Hung in Stuck State, Show Spooling"
permalink: /kb/188/Q188991/
---

## Q188991: 5250 Print Session May Be Hung in Stuck State, Show Spooling

	Article: Q188991
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 11-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A 5250 print session may be hung in a stuck state, showing "spooling" for its
	status in SNA Manager.
	
	CAUSE
	=====
	
	The Ppd5250.dll file is not handling properly all errors related to printing.
	These errors are related to either a failure to communicate to the remote
	printer, or StartDoc/StartPage errors.
	
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
	
	This problem was corrected in the latest Microsoft SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. This problem was first corrected in SNA
	Server 3.0 Service Pack 4.
	
	Additional query words: snaprint
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : :3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
