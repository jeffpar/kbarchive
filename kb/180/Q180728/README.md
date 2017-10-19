---
layout: page
title: "Q180728: SNA Manager Traps When Assigning Multiple LUs to a Workstation"
permalink: /kb/180/Q180728/
---

## Q180728: SNA Manager Traps When Assigning Multiple LUs to a Workstation

	Article: Q180728
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An Access Violation occurs in SNAEXP.EXE after assigning multiple LU's to a
	workstation. When this problem was observed, SNAEXP.EXE failed with an access
	violation (0xC0000005) in the following routine:
	
	  snaexp!CAboutDlg__`RTTI Complete Object Locator'
	
	CAUSE
	=====
	
	SNA Manager was not properly releasing an object, leading to an access
	violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT SNA Server 3.0, 3.0
	Service Pack 1 (SP1), and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	To reproduce this problem with SNA Manager, follow these steps:
	
	1. Create a few display LUs called TestA, TestB and TestC.
	
	2. Assign TestB to a workstation
	
	3. Right Click the workstation and select assign to and then select all LUs.
	
	4. An error message will occur stating that the LU is already assigned.
	
	5. Assign the LU's in different variations.
	
	This problem was fixed in the retail release of SNA Server 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
