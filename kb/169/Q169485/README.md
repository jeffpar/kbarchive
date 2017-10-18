---
layout: page
title: "Q169485: 3270 LU Assignments to Workstations Not Saved Properly"
permalink: kb/169/Q169485/
---

## Q169485: 3270 LU Assignments to Workstations Not Saved Properly

	Article: Q169485
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you assign, delete or add 3270 LUs (or pooled LUs) to workstations, the
	changes may fail to be saved, or may cause other workstation assignments to
	unexpectedly change. This problem can occur when you use SNA Server Manager or
	the command-line Snacfg.exe tool.
	
	CAUSE
	=====
	
	Workstation records (new to SNA Server 3.0) are stored as extended records in
	the SNA Server configuration file. The method of storing LU assignments to
	workstations failed to properly accommodate the assignment of pooled 3270 LUs,
	or if the same 3270 LU is assigned to more than one workstation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and 3.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
