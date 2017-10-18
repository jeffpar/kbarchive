---
layout: page
title: "Q172815: Win3x 5250 Applet Traps When Wswappc.dll Not Unloaded"
permalink: kb/172/Q172815/
---

## Q172815: Win3x 5250 Applet Traps When Wswappc.dll Not Unloaded

	Article: Q172815
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Windows 3.x version of the 5250 applet (Win5250.exe) traps.
	
	CAUSE
	=====
	
	When Win5250.exe terminates, it occasionally does not unload Wswappc.dll from
	memory. When Wswappc.dll has not been previously unloaded, Win5250.exe traps the
	next time it is run.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, Win5250.exe allocates global memory with GMEM_SHARE and
	this memory is not discarded when the applet terminates.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
