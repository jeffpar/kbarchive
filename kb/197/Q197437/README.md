---
layout: page
title: "Q197437: Print Server Data Filter DLL causes Access Violation in SNAPRINT"
permalink: /kb/197/Q197437/
---

## Q197437: Print Server Data Filter DLL causes Access Violation in SNAPRINT

	Article: Q197437
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Snaprint.exe generates an Access Violation when attempting to read (void*)NULL
	pointer (0x00000000) from the PrtFilterJobStart function in the Print Server
	Data Filter DLL.
	
	MORE INFORMATION
	================
	
	The PrtFilterJobStart function returns a unique identifier (cast to a pointer to
	a void) if it wants the opportunity to filter the data for this print job. If
	the user DLL returns a NULL pointer, it is indicating that it is not interested
	in filtering this job. No further calls to the user DLL will be made for this
	print job.
	
	If a FilterDLL is present, it can return a value to say "I don't want to filter
	this job's data." In the SNA Server SDK Documentation, this value is listed as
	NULL = 0. In the code, however, the code consistently checks against
	INVALID_HANDLE_VALUE = -1. The code is fixed so that now a returned value of
	NULL is updated to INVALID_HANDLE_VALUE.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0 and SNA Server version 4.0. This problem was first corrected in SNA Server
	3.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
