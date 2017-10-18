---
layout: page
title: "Q194552: Client SNA Manager Traps after Removing Host Account Manager"
permalink: kb/194/Q194552/
---

## Q194552: Client SNA Manager Traps after Removing Host Account Manager

	Article: Q194552
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Host Account Manager component is initially installed with the Windows NT
	SNA Client software, and later it is removed, SNA Manager will experience an
	Access Violation (or "trap") when the user attempts to start SNA Manager from
	the client computer.
	
	CAUSE
	=====
	
	When the Host Account Manager component is removed, Snarpc.dll is also removed.
	SNA Manager depends on this file, and traps when it cannot find the file.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0 and 4.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	
	WORKAROUND
	==========
	
	To work around this problem, copy the Snarpc.dll from the SNA Server 4.0 or
	Service Pack 1 image (depending on what version of the Windows NT SNA Server
	client is being used) to the Sna\System directory on the client computer.[ASCII
	160] Another option is to reinstall the Host Account Manager component.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
