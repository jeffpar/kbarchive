---
layout: page
title: "Q160878: GPF in Krnl386 When Using CPIC Thunking DLL on a WinNT Computer"
permalink: kb/160/Q160878/
---

## Q160878: GPF in Krnl386 When Using CPIC Thunking DLL on a WinNT Computer

	Article: Q160878
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a 16-bit CPIC application against the WinCPIC thunking DLL
	(Wincpic.dll from the <snaroot>\system\thunk directory) on a computer
	running Windows NT, the following error may occur:
	
	  <application> has caused a general protection fault in module
	  krnl386.exe at 1:9044
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 Service
	Pack 1 and in version 3.0. This problem was corrected in the latest SNA Server
	version 2.11 and 3.0 U.S. Service Packs. For information on obtaining these
	Service Packs, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: sp sp1 gpf gp
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
